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
              help.manual(obj.pyload);

          help.manual();
          break;

        default:
          
          
          var commands = Object.keys( globalState.commands );
          if ( tool.includes(commands, obj.action) ) {
            
            
            if ( obj.args.length > 0 && globalState.commands[obj.action].args === true ) {}
            else if () {}
            else if {}
            // console.log( globalState.commands[obj.action] );
            // if ( ( obj.args.length > 0 && globalState.commands[obj.action].args === true )
            // || ( globalState.commands[obj.action] === true && obj.pyload.length > 0 ) ) {
                
            //     var method = require( path.resolve( globalState['main-app'] ) )( obj.action, obj );
                  
            //     //   console.log( method );
            //     // method(obj.action);
            //     resp = 1;
            // }
            // else {
              
            //   resp = 0;
            // }
            
          }
          
          break;
    }
    
    if ( resp === undefined || resp === 0 ) {
          
        tool.catchError( resp === 'no args' ? `*error: this command '${ obj.action  }' does not take any additional arguements or payload.` : `*error: Unkown command '${ obj.action }', exit.`);
    }
    
}
