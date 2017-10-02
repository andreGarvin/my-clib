// Internal tools and modules
const dispatch_action = require('./src/dispatch_action.js'),
argParser = require('./src/arg-parser.js'),
tool = require('./src/tools.js'),
help = require('./src/help.js'),
ilds = require('./src/ilds.js');


// exporting the bin script modules
module.exports = {
    zip: tool.zip,
    help: help.manual,
    onload: ilds.onload,
    logger: tool.logger,
    exArgs: tool.exArgs,
    prompt: tool.prompt,
    pipeline: tool.pipeline,
    catchError: tool.catchError,
    argParser: argParser,
    dispatch_action: dispatch_action,
    global_state: {},
};
