const tool = require('./tools.js');

/**
  * This is a Object that holds the parsed arguments that were passed from the
  * command line to the comand line application.
  * @property {string} action The cli tool commmand
  * @property {array} payload The arguments that are not flags or actions, sucha as
  * files, stings, or what ever that is consumed by the cli application
  * @property {Object} flags All the flag arguemnets passed to the applciation
  * @typedef {Object} pasred_arguments
*/

/**
  * This fucntions takes a array of the command line arguments that was passed
  * to the application parses the the given arguments and returns back a object
  * of the {parsed_arguments}
  * conatins the properties of action, flags, and payload.
  * This function can optionaly takes a callback or not.
  * @param {array} args 'process.argv'
  * @param {function} callback returns back the parsed arguments
  * @function
  * @return {callback}
*/
module.exports = (args, callback) {
    args = args.slice(2, args.length)

    const parsed_arguments = {
        action: undefined,
        flags: {},
        payload: []
    }

    for (var i = 0; i < args.length; i++) {
        let arg = args[i];

        if ( arg.split('=').length > 1 ) {
            arg = arg.split('=')
            parsed_arguments.flags[strip(arg[0], '-')] = arg[1]
        } else if ( arg.split('-').length > 1 ) {
            if ( ![ args[i + 1] ].includes('-') ) {
                parsed_arguments.flags[ strip(arg, '-') ] = args[i + 1];
            } else {
                parsed_arguments.flags[ strip(arg, '-') ] = undefined
            }
        } else {
            if (!Object.values(parsed_arguments.flags).includes(arg)) {
                parsed_arguments.payload.push(arg)
            }
        }
    }

    return callback !== undefined && typeof callback === 'function' ? callback(parsed_arguments) : parsed_arguments
}
