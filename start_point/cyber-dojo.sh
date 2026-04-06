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

node_modules/.bin/eslint --config ${CYBER_DOJO_SANDBOX}/eslint.config.js /**/*.js
node_modules/.bin/nyc node_modules/.bin/qunit-cli *test*.js
