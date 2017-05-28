const tool = require('./tools.js');

module.exports.argParser = function(args, callback) {
    args = args.splice(1, args.length);

    if ( args.length !== 0 || args !== undefined ) {

        var obj = {
            action: args[1] === undefined ? '' : args[1].slice(0, 2) === '--' ? args[1].slice(2, args[1].length) : args[1],
            args: [],
            payload: []
        };

        var index;
        for ( var i = 1; i < args.length; i++ ) {

             //  if the item has a dash or a double dash then append it to obj.args
             if ( args[i][0] === '-' && args[i][1] !== '-' ) {

                 var arr = args[i].split('').slice(1, args[i].split('').length);
                 for ( var j in arr ) {
                     
                     obj.args.push( arr[j] );
                 }
             }
             else if ( args[i].slice(0, 2) === '--' ) {
                 
                 obj.args.push( args[i].slice(2, args[i].length) );
             }
             // this checks wether the item in the array does not have adash or double dashes
             else if ( ( args[i].slice(0, 2) !== '--' && i !== 1 ) || ( args[i][0] === '-' && args[i][1] !== '-' ) ) {

                  // if the item does not have that then the payload index marker starts there
                  index = args.length >= 5 ? i - 1: i;
             }
        }


        obj.payload = args[index] !== undefined ? args.slice(index, args.length) : [];

        return callback !== undefined ? callback(null, obj) : console.log( args );
    }
};
