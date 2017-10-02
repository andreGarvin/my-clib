const fs = require('fs'),
      path = require('path');
const tool = require('./tools.js'),
      help = require('./help.js');

/**
  * This is a function that holds a swicth statement that triggers which comamnds
  * to excute in the sli application.
  * @typedef {function} dispatch_action
*/

/**
  * This triggers a command given a certain action which is a command in the
  * cli tool. This is also given the a function parameter called method,
  * a object called {parsed_arguments} which holds the action, payload, and flags.
  * if a help action was sent to the {dispatch_action} function it will excute
  * the 'help.manual()' passing in any paylaod given to the function,
  * else procced to the method passed to the {dispatch_action} function.
  * @function
  * @param {function} method this is the {dispatch_action} function
  * @param {pasred_arguments} parsed_arguments This is a object that holds all
  * the parsed data that was passed to the cli application.
  * @param {array} commands this a array of all the commands in the cli tools
  * @return {method}
*/
module.exports = (method, parsed_arguments, commands) => {

    var resp = 0;
    switch ( parsed_arguments.action ) {

        // default checks if the action reqauls help to excuate automatically
        case 'help':

              if ( parsed_arguments.payload.length !== 0 ) {
                  help.manual(parsed_arguments.pyload);
              } else {
                  help.manual();
              }
            break;

        default:

              //   checks if the commands arguemnt does not equal undefined
              if ( commands !== undefined ) {

                    // checks wether the command exists
                    if ( parsed_argumentsect.keys( commands ).includes( parsed_arguments.action ) ) {

                        // checks weather the command requires any arguements or paylaod
                        var command = commands[ parsed_arguments.action ];
                        if ( ( parsed_arguments.payload.length !== 0 && command.payload === null )
                              ||
                             ( parsed_arguments.args.length !== 0 && command.args === null ) ) {

                            // returns this error if the command does not need any payload or arguemnts
                            // that was described in the cli.json
                            resp = '*error: This command does accept any payload or arguments.';
                        }
                    }
                    else {

                        // if the command does not exist return this arror message
                        resp = '*error: This command does not exist.';
                    }
              }
              break;

     }

     // if the resp variable does equal zero meaning no errors
     if ( resp !== 0 ) return tool.catchError( resp );

     //  else if it equals zero then return the method
     return method(parsed_arguments.action, parsed_arguments);
};
