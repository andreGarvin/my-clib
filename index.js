// modules needed for prompt
const readline = require('readline');

// internal tools and modules
const dispatch_action = require('./dispatch_action.js'),
argParser = require('./arg-parser.js'),
tool = require('./tools.js'),
help = require('./help.js'),
ilds = require('./ilds.js');


// exporting the bin script modules

module.exports = {
    zip: tool.zip,
    help: help.manual,
    onload: ilds.onload,
    logger: tool.logger,
    exArgs: tool.exArgs,
    prompt: tool.prompt,
    includes: tool.includes,
    pipeline: tool.pipeline,
    catchError: tool.catchError,
    argParser: argParser,
    dispatch_action: dispatch_action,
    global_state: '',
};
