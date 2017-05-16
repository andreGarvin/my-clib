const tool = require('./tools.js'),
help = require('./help.js'),
path = require('path'),
fs = require('fs');

// dispatchs the actions to the
module.exports.dispatch_action = (obj, globalState) => {
    
    globalState = JSON.parse( globalState );
    var resp;
    switch ( obj.action ) {
        case 'help':

          if ( obj.payload.length !== 0 )
              help(obj.pyload);

          help();
          break;

        default:
          
          
          console.log( globalState );
          // var commands = Object.keys( globalState.commands );
          // for ( var i in commands ) {
              
          //     if ( tool.includes(commands, obj.action) ) {
                  
          //         return resp = 'yes';
          //     }
          // }
          
          // if ( resp !== undefined ) {
          //     console.log( resp );
          // }
          
          // tool.catchError(`*error: Unkown command '${ obj.action }', exit.`);
          break;
    }
    
    // return resp;
}
