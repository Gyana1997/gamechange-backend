{
    "apps"[{
      "name"        : "Standard-app",
      "script"      : "build/server.js",
      "args"        : ["--log_dir=./build/logs"],
      "watch"       : false,
      "merge_logs"  : true,
      "instances"  : 1,
      "exec_mode"  : "fork",
      "error_file" : "/var/log/standard-app/warn.json",
      "out_file"   : "/var/log/standard-app/info.json",
      "env" : {
        "NODE_ENV" : "dev"
      }
    }]
}
