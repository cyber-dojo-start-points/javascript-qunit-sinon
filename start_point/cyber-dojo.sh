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

npm run lint
npm run test
