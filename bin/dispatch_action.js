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
              break;

     }
     
     if ( resp !== 0 ) {
        
         return tool.catchError( resp );
     }
    
     return method(obj.action, obj);
};


//   if ( command.args === false && obj.args.length > 0 ) {

                //       return resp = `*error: Command '${ obj.action }' takes no arguments`;
                //   }
                //   else if ( command.payload === false && obj.payload.length > 0 ) {

                //       resp = `*error: Command '${ obj.action }' takes no arguments.`;
                //   }


                //   // if the user givens no arguements or payload
                //   if ( obj.args.length === 0 || obj.payload.length === 0 ) {

                //       resp = `*error: '${ obj.action }' must receive arguments and payload`;
                //   }

                //   // checks none of the arguements given are acyaul arguemts
                //   for ( var j in obj.args ) {

                //       /*
                //           includes return 'true' as a boolean value
                //           so by using '!' if it returns 'true' that will turn into false
                //           but if it retuns 'false' that with turn that into 'true'
                //       */
                //       if ( !tool.includes(commands.args, obj.args[ j ]) ) {

                //           return resp = `*error: Unknown arguement '${ obj.args[j] }'.`;
                //       }
                //   }

                //   return resp !== undefined ? resp : resp = 1;

                  // if ( ( obj.args.length > 0 && globalState.commands[obj.action].args === true )
                  // || ( globalState.commands[obj.action] === true && obj.pyload.length > 0 ) ) {

                  //     var method = require( path.resolve( globalState['main-app'] ) )( obj.action, obj );

                  //     //   console.log( method );
                  //     // method(obj.action);
                  //     resp = 1;
                  // }
                  //  if ( typeof( resp ) === 'string' ) {

                  // && globalState.commands[obj.action].args === true
                  // resp === 'no args' ? `*error: this command '${ obj.action  }' does not take any additional arguements or payload.` : `*error: Unkown command '${ obj.action }', exit.`
                  //  tool.catchError( resp );
                  //  }