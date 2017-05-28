const tool = require('./tools.js'),
help = require('./help.js'),
path = require('path'),
fs = require('fs');

// dispatchs the actions to the
module.exports.dispatch_action = (method, obj, commands) => {

    var resp = 0;
    switch ( obj.action ) {
        case 'help':

            //   if ( obj.payload.length !== 0 )
            //       help.manual(obj.pyload);

            //   help.manual();
            break;

        default:

              if ( commands !== undefined ) {
                    // checks wether the command exists
                    if ( tool.includes(Object.keys( commands ), obj.action ) ) {

                        // checks weather the command requires any arguements or paylaod
                        var command = commands[ obj.action ];
                        if ( ( obj.payload.length !== 0 && command.payload === null ) || ( obj.args.length !== 0 && command.args === null ) ) {
                        
                            resp = '*error: This command does accept any payload or arguments.';
                        }
                    }
                    else {
                  
                        resp = '*error: This command does not exist.';
                    }  
              }
              break;

     }
     
     if ( resp !== 0 ) {
        
         return tool.catchError( resp );
     }
    
     return method(obj.action, obj);
};
