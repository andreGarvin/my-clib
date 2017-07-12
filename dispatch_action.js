const tool = require('./tools.js'),
help = require('./help.js'),
path = require('path'),
fs = require('fs');

// dispatchs the actions to the
module.exports = (method, obj, commands) => {

    var resp = 0;
    switch ( obj.action ) {

        // default checks if the action reqauls help to excuate automatically
        case 'help':

              if ( obj.payload.length !== 0 )
                  help.manual(obj.pyload);

              help.manual();
            break;

        default:

              //   checks if the commands arguemnt does not equal undefined
              if ( commands !== undefined ) {

                    // checks wether the command exists
                    if ( tool.includes(Object.keys( commands ), obj.action ) ) {

                        // checks weather the command requires any arguements or paylaod
                        var command = commands[ obj.action ];
                        if ( ( obj.payload.length !== 0 && command.payload === null ) || ( obj.args.length !== 0 && command.args === null ) ) {

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
     if ( resp !== 0 ) {

         return tool.catchError( resp );
     }

    //  else if it equals zero then return the method
     return method(obj.action, obj);
};
