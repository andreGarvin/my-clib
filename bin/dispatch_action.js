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
          for ( var i in commands ) {
              
              if ( tool.includes(commands, obj.action) ) {
                  
                  var method = require( path.resolve( obj['main-app'] ) );
                  
                  console.log( method );
                  // method(obj.action);
                  resp = 1;
              }
          }
          
          break;
    }
    
    if ( resp === undefined ) {
          
        tool.catchError(`*error: Unkown command '${ obj.action }', exit.`);
    }
}
