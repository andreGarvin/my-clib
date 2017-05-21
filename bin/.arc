// saves new json object data to json file
exports.save = function( options, callback ) {
// replace(/^\s+|\s+$/g, '')

// fs.writeFile('./.bin.json', JSON.stringify( bin, null, 4 ), (err) => {
//     if ( err ) {
//
//         // catching error that occur in the avsing of data to the json file
//         return callback({
//             msg: "bin *error: Unable to save data to bin, reslove to the problem with 'bin check'.",
//             status: false
//         }, undefined);
//     }
//
//     // no errors saving the data
//     return callback(null, {
//         msg: 'bin: bin Store updated',
//         status: false
//     });
//
// });
// {
//     type: 'http',
//     route: '/<api route>',
//     payload: '' || {} || [],
//     formatted: false,
//     handle
// }
//
// {
//     type: 'file',
//     output: 'file.txt',
//     payload: '' || {} || [],
//     formatted: true,
//     handle: false
// }
  if ( Object.keys( options ).length !== 0  &&
     ( options.type.length !== 0 && options.type !== false )
  ) {

      if ( callback !== undefined ) {

          var resp;
          switch ( options.type ) {
            case 'file':

                resp = file(
                    options.output,
                    options.payload,
                    options.fromatted
                );
              break;
            case 'http':

              resp = http(
                  options.route,
                  options.payload,
                  options.fromatted
              );
              break;
            default:

                resp = tool.catchError(`*error: options type '${ options.type }' is undefined.`
                     callback === undefined ? undefined : callback
                );
              break;
          }

          return resp;
      }


  }

};

// initializes the .bin.json file
exports.init = function() {


    fs.exists('./.bin.json', (exst) => {
        if (!exst) {

            // bin already initialized
            return tool.catchError(`bin: 'bin' already exist and initializied bin n ${ process.env.PWD }.`);
        }

        // json object of the bin in the json file init
        const bin_obj = {
            os: process.platform,
            stat: '',
            bin: {
                docs: [],
                store: '.binstore',
                docs_len: 0
            },
            stage: [],
            stale: [],
            new_docs: []
        };

        fs.writeFile('./.bin.json', JSON.stringify( bin_obj, null, 2 ), (err) => {
            if (err) {

                //  error occurs console log error message
                return tool.catchError(`bin (*error): There is  problem initializing your bin in ${ process.env.PWD }.; ${ err.message }`);
            }

            console.log(`bin: Initialized bin in ${ process.env.PWD }`);
        });

    });

}



# this is old code zone

// const fs = require('fs'),
// 			args = process.argv,
// 			cliJSON = './cli.json';
//
//
// function includes( arr, item ) {
// 			for ( var i in arr ) {
//
// 					 if ( arr[i] === item ) {
//
// 							 return true;
// 					 }
// 			}
//
// 			return false;
// }
//
//
//
// function catchError( err, callback ) {
// 			if ( callback === undefined ) {
//
// 					console.log( err || `*error: ${ err.message }` );
// 					return;
// 			}
// 			else if ( callback !== undefined ) {
//
// 					return callback({
// 							status: false,
// 							msg: err || `*error: ${ err.message.split(' ').splice(1, err.message.split(' ').length).join(' ') }`
// 					}, undefined);
// 			}
//
// }
//
// function onload( file_name, callback ) {
//
// 		fs.readFile(file_name, ( err, data ) => {
// 				if (err) return catchError( err, callback );
//
// 				var cliJSON = JSON.parse( data );
//
// 				return callback( null, cliJSON );
// 		})
// }
//
// function argParse( args, callback ) {
//
// 			args = args.slice(2, args.length);
//
// 			if ( args.length !== 0 ) {
//
// 					// if ( includes(args, '-h') || includes(args, '--help') ) {
// 					//
// 					// 		return callback( null, 'call help' );
// 					// }
// 					// else if ( includes(args, 'init') || includes(args, 'i') ) {
// 					//
// 					// 		 return callback( null, 'call init' );
// 					// }
// 					//
//
// 					var obj = {
// 							action: args[0],
// 							args: [],
// 							payload: '',
// 					};
// 					for ( var c in args ) {
// 							if ( args[c][0] === '-' && args[c][1] !== '-' ) {
//
// 									args = args[ c ].slice( 1, args[ c ].length ).split('');
// 									for ( var e in args ) {
//
// 											obj.args.push( args[ e ] );
// 									}
// 							}
// 							else if ( args[c].slice(0, 2) === '--' ) {
//
// 									obj.args.push( args[ c ].split('')[ args[ c ].length - 1 ] );
// 							}
// 					}
//
// 					obj.paylaod = args.slice(args.length - 1, args.length);
// 					return callback( null, obj);
// 			}
//
// 			return catchError('*error: No arguments were passed.', callback);
// }
//
// argParse(args, ( err, payload ) => {
// 			if ( err ) return catchError( err.msg );
//
// 			console.log( payload );
// });
//
//
// // onload(cliJSON, ( err, resp ) => {
// // 			if ( err ) return catchError( err.msg );
// //
// // 			console.log( resp );
// // });
