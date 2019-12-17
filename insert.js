const { spawnSync } = require("child_process")
const { argv } = process
spawnSync("cp", [
  "-r",
  "binding",
  `${argv[argv.length - 1]}/node_modules/sqlite3/lib`
], {
  stdio: "inherit",
  cwd: __dirname
})