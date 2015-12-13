#!/usr/bin/env node

var program = require('commander');
var info = require('../package.json');
var runSever = require('../lib/server');

program
    .version(info.version)
    .command('run <key>')
    .action(function (key) {
        runSever(key);
    });

program.parse(process.argv);
