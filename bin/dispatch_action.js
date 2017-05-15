const fs = require('fs'),
path = require('path'),
tool = require('./tools.js');

// dispatchs the actions to the
module.eports.dispatch_action = (obj, method_path) => {

    switch ( obj.action ) {
        case 'help':

          if ( obj.payload.length !== 0 )
              bin.help(obj.pyload);

          bin.help();
          break;

        default:

          var method = require( );
          break;
    }

}
