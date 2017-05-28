// exporting the bin script modules

module.exports = {
    onload: require('./ilds.js').onload,
    logger: require('./tools.js').logger,
    includes: require('./tools.js').includes,
    catchError: require('./tools.js').catchError,
    argParser: require('./arg-parser.js').argParser,
    dispatch_action: require('./dispatch_action.js').dispatch_action,
    help: require('./help.js').manual,
    global_state: '',
    exArgs: function( arr, method, data ) {
    
        /*
            assign data to output so when it passes it to method
            on the first run it does not refeence the smae first 
            vlaue and rsssings to a new value
        */
        var output = data;
        for ( var i = 0; i < arr.length; i++ ) {
            
            // call the mwthod again nd pass in the data
            output = method(arr[i], output);
        }
    
        return output;
    }
};
