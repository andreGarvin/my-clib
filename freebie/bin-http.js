const bin = require('./bin/index.js');



bin.argParser(process.argv, (err, obj) => {
    if (err) return bin.catchError(err);

    console.log( obj );
})



// if ( obj.action.length === 0 ) return console.log('error: need args.');
//
// method(obj.action, obj);
// // bin = require('./dispatch_action.js');
// // bin.dispatch_action(obj.action, method || './script.js');











// axios = require('axios');
//
// var method = ( action, obj ) => {
//
//   switch ( action ) {
//     case 'GET':
//
//     axios.get(obj.payload[0])
//     .then( ( resp ) => {
//
//       obj.meta = {
//         header: resp.headers['content-type'],
//         server: resp.headers.server,
//         date: resp.headers.date,
//         status: resp.status,
//         url: resp.config.url,
//         data: resp.data,
//       };
//
//       if ( obj.args[0] === 'x' ) {
//
//         obj.meta.data = null;
//
//         return console.log( obj );
//       }
//
//       else if ( obj.args[0] === 'h' && obj.args[1] === 'x' ) {
//
//         obj = obj.meta;
//         obj.data = null;
//
//         return console.log( obj );
//       }
//
//       else if ( obj.args[0] === 'h' ) {
//
//         return console.log( obj.meta );
//       }
//
//       else if ( obj.args[0] === 'i' ) {
//
//         var fs = require('fs');
//         fs.writeFileSync(obj.payload[1], JSON.stringify(obj), 'utf8');
//         return console.log(`Placed http data in ${ obj.payload[1] }`);
//       }
//
//       return console.log( obj );
//     });
//
//     break;
//     default:
//
//     return console.log(`error: '${ action }' command not defined.`);
//     break;
//   }
//
// }
