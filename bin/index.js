
// exporting the bin script modules
module.exports = {
    onload: require('./ilds.js').onload,
    logger: require('./tools.js').logger,
    includes: require('./tools.js').includes,
    catchError: require('./tools.js').catchError,
    argParser: require('./arg-parser.js').argParser,
    dispatch_action: require('./dispatch_action.js').dispatch_action,
    help: require('./help.js').manual,
    global_state: ''
    
    // init: require('./ilds.js').init,
    // save: require('./ilds.js').save
};
