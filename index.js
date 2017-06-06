// exporting the bin script modules

module.exports = {
    onload: require('./ilds.js').onload,
    logger: require('./tools.js').logger,
    includes: require('./tools.js').includes,
    catchError: require('./tools.js').catchError,
    argParser: require('./arg-parser.js').argParser,
    dispatch_action: require('./dispatch_action.js').dispatch_action,
    help: require('./help.js').manual,
    exArgs: function( method, arr_args, data ) {

        /*
            assign data to output so when it passes it to method
            on the first run it does not reference the sa,e value
            and rsssings to a new value.

            Mutates the data base on the the number of
            arguements and payload size.
        */
        var output = data;
        for ( var i = 0; i < arr_args.length; i++ ) {

            // call the mwthod again nd pass in the data
            output = method(arr_args[i], output);
        }

        return output;
    },
    global_state: '',
};
