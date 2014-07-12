/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

var endpoints = process.argv;
endpoints.splice(0, 2); // remove the first two parameters
var type = endpoints.splice(0, 1); // type of event
var exec = require('child_process').exec;
var fs = require("fs");

for (var i = 0; i < endpoints.length; i++) {

    var basePath=process.cwd();
    var modulePath = basePath + "/modules/" + endpoints[i];
    var postScriptFile = modulePath +"/.hw2/installer_hook.js"

    fs.exists(postScriptFile, function(exists) {
        if (exists) {

            // exec mode, passing 3 arguments to the script: 
            // * argv[2] type of event
            // * argv[3] base path
            // * argv[4] module path
            /*exec('node ' + postScriptFile + " " + type + ' "' + basePath + '"' + ' "' + modulePath + '"',
                    function(error, stdout, stderr) {
                        console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        }
                    }
            );*/
            
            require(postScriptFile)(type,basePath,modulePath);
        } else {
            console.log("file " + postScriptFile + " doesn't exists");
        }
    });

}




