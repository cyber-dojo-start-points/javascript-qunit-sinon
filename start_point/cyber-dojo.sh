# --------------------------------------------------------------
# Text files under /sandbox are automatically returned...
source ~/cyber_dojo_fs_cleaners.sh
function cyber_dojo_exit()
{
  # Remove text files we don't want returned.
  cyber_dojo_delete_dirs .nyc_output # ...
  #cyber_dojo_delete_files ...
}
trap cyber_dojo_exit EXIT SIGTERM

# --------------------------------------------------------------
ln -s /etc/qunit_sinon/node_modules ${CYBER_DOJO_SANDBOX}/node_modules

# Calling [npm run ...] is sloooow so we don't to that.

# eslint reads your code and the tests run it, so neither needs the other to
# have finished and they run at once. Each is a fresh node process, which is
# most of what they cost. Their output is held and replayed below in the order
# running them one after another produces, so what reaches stdout and stderr is
# unchanged; only the waiting overlaps.
# HELD is on /tmp, which the exit trap never walks, so nothing here comes back
# as a file.
readonly HELD=$(mktemp -d)

# Each tool's two streams are held apart. The traffic-light lambda is handed
# stdout and stderr separately, so a byte that moved from one to the other
# could change the colour.
node_modules/.bin/eslint --config ${CYBER_DOJO_SANDBOX}/eslint.config.mjs /**/*.js \
  > ${HELD}/lint 2> ${HELD}/lint.err &
readonly LINT_PID=$!

node_modules/.bin/nyc node_modules/.bin/qunit-cli *test*.js \
  > ${HELD}/tests 2> ${HELD}/tests.err &
readonly TESTS_PID=$!

# A failing eslint does not stop the run: this script has no [set -e], so the
# tests report their result whatever the linting said.
wait ${LINT_PID} || true
cat ${HELD}/lint
cat ${HELD}/lint.err >&2

# The exit status is the tests' own, which is what the script ended on when
# the two ran in sequence.
wait ${TESTS_PID} || TESTS_STATUS=$?
cat ${HELD}/tests
cat ${HELD}/tests.err >&2
exit ${TESTS_STATUS:-0}
