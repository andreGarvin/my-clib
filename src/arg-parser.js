const tool = require('./tools.js');

/**
  * This is a Object that holds the parsed arguments that were passed from the
  * command line to the comand line application.
  * @property {string} action The cli tool commmand
  * @property {array} payload The arguments that are not flags or actions, sucha as
  * files, stings, or what ever that is consumed by the cli application
  * @property {array} flags This is flags that are used int he cli application
  * @typedef {Object} pasred_arguments
*/

/**
  * this fucntions takes a list of arguemnets that was passed through the application
  * parses the the given arguments and returns backa object of the {parsed_arguments}
  * conatins the properties of action, flags, and payload.
  * This function can optionaly take a callback or not.
  * @function
  * @param {array} args This object is defined in the type defintion of args
  * @param {function} callback this is the function that returns back the parsed arguments
  * @return {callback}
*/
module.exports = function(args, callback) {

    // splices the cli arguements
    args = args.splice(1, args.length);

    // if there was any given arguments was passed to the function
    if ( args.length !== 0 || args !== undefined ) {

        // create a obj to a hold the parsed command lne arguements
        /*
            action: is the one of th many commands the person excutes
            args: the falgs used to tell wether to excute something else
            payload: is the axtra data attached to the command line arguements
        */
        var parsed_arguments = {
            /*
                if the arguments the slice array index of zero
                equals '--help' then return 'help',
                else return ''
            */
            action: args[1] === undefined ? '' : args[1].slice(0, 2) === '--' ? args[1].slice(2, args[1].length) : args[1],
            flags: [],
            payload: []
        };

        var index;
        for ( var i = 1; i < args.length; i++ ) {
              let argument = args[i];

              //  if the item has a dash or a double dash then append it to obj.flags property
              if ( argument[0] === '-' && argument[1] !== '-' ) {

                //  breaks the index of that arry in a list
                 var arr = argument.split('').slice(1, argument.split('').length);
                 for ( var j in arr ) {
                    //  then append them to the obj.flagsarray
                     obj.flags.push( arr[j] );
                 }
             }
             else if ( argument.slice(0, 2) === '--' ) {

                 /*
                    if a index has double dash '--'
                    then push that to the array obj.flags
                 */
                 obj.flags.push( argument.slice(2, argument.length) );
             }
             // checks if the item in the array does not have a dash or double dashes
             else if ( ( i !== 0 && i !== 1 ) && ( argument.slice(0, 2) !== '--' && i !== 1 ) || ( argument[0] === '-' && argument[1] !== '-' ) ) {

                  // pushes the payload data to the obj.payload array
                  obj.payload.push( argument );

             }
        }

        /*
            if a callback was given then this function returns the callback
            else returns back the parsed_arguments object
        */
        return callback !== undefined ? callback(null, parsed_arguments) : parsed_arguments;
    }
};
