/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

var endpoints = process.argv;
endpoints.splice(0, 2); // remove the first two parameters
var type = endpoints.splice(0, 1); // type of event
var fs = require("fs");

var basePath=process.cwd();

for (var i = 0; i < endpoints.length; i++) {

    var modulePath = basePath + "/modules/" + endpoints[i];
    var postScriptFile = modulePath +"/_hw2/installer_hook.js"

    if (fs.existsSync(postScriptFile)) {
            require(postScriptFile)(type,basePath,modulePath);
    };
}