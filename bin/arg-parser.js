const tool = require('./tools.js');

module.exports.argParser = function(args, callback) {
    args = args.splice(2, args.length);

    return callback !== undefined ? callback(null, args) : console.log( args );
}





























//
// module.exports.argParser = function( arg, callback ) {
//
//     if ( arg !== undefined ) {
//
//         var obj = {
//             action: null,
//             args: [],
//             payload: []
//         };
//         if ( arg.length === 0 ) {
//
//             return catchError({
//                 msg: '*error: no arguments were passed to function argParser'
//             }, callback !== undefined ? callback : undefined);
//         }
//         if ( arg.length === 1 ) {
//
//             return callback !== undefined ? callback(null, {
//                 action: arg[0],
//                 args: [],
//                 payload: []
//             }) : {
//                 action: arg[0],
//                 args: [],
//                 payload: []
//             };
//         }
//         else if ( callback === undefined ) {
//
//
//             for ( var i = 0; i < arg.length; i++ ) {
//
//                 if ( arg[i][0] === '-' && arg[i][1] !== '-' ) {
//
//                     obj.args.push( arg[i].split('').slice(1, arg[i].split('').length) );
//                 }
//                 else if ( arg[i].slice(0, 2) === '--' ) {
//
//                     obj.args.push( arg[i].slice(2, arg[i].length) );
//                 }
//                 else {
//
//                     obj.payload.push( arg[i] );
//                 }
//             }
//
//             return obj;
//         }
//
//         for ( var i = 0; i < arg.length; i++ ) {
//
//             if ( arg[i][0] === '-' && arg[i][1] !== '-' ) {
//
//                 obj.args.push( arg[i].split('').slice(1, arg[i].split('').length) );
//             }
//             else if ( arg[i].slice(0, 2) === '--' ) {
//
//                 obj.args.push( arg[i].slice(2, arg[i].length) );
//             }
//             else {
//
//                 obj.payload.push( arg[i] );
//             }
//         }
//
//         if ( obj.args.length === 0 && obj.payload.length === 0 ) {
//
//             return catchError({
//                 msg: '*error: The argurments passed into the function argParser could not be parsered.'
//             }, callback)
//         }
//
//         return callback(null, obj);
//     }
//
//     return catchError({
//         msg: '*error: no arguments were passed to function argParser.'
//     });
// }
