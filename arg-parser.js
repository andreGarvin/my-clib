const tool = require('./tools.js');

module.exports.argParser = function(args, callback) {
    
    // splices the cli arguements
    // to return [ 'action', 'args', 'payload...' ]
    args = args.splice(1, args.length);
    
    // if any args was passed to argParser
    if ( args.length !== 0 || args !== undefined ) {

        // create a obj to a hole the command lne arguements
        /*
            action: is the one of th many commands the person excutes
            args: the falgs used to tell wether to excute something else
            payload: is the axtra data attached to the command line arguements
        */
        var obj = {
            /*
                if the args the slice array index of zero 
                equals '--help' then return 'help',
                else return ''
            */
            action: args[1] === undefined ? '' : args[1].slice(0, 2) === '--' ? args[1].slice(2, args[1].length) : args[1],
            args: [],
            payload: []
        };

        var index;
        for ( var i = 1; i < args.length; i++ ) {

             //  if the item has a dash or a double dash then append it to obj.args
             if ( args[i][0] === '-' && args[i][1] !== '-' ) {

                //  breaks the index of that arry in a list
                 var arr = args[i].split('').slice(1, args[i].split('').length);
                 for ( var j in arr ) {
                    //  then append them to the obj.args array
                     obj.args.push( arr[j] );
                 }
             }
             else if ( args[i].slice(0, 2) === '--' ) {
                 
                 /*
                    if a index has double dash '--' 
                    then push that to the array obj.args
                 */
                 obj.args.push( args[i].slice(2, args[i].length) );
             }
             // this checks wether the item in the array does not have adash or double dashes
             else if ( ( args[i].slice(0, 2) !== '--' && i !== 1 ) || ( args[i][0] === '-' && args[i][1] !== '-' ) ) {
            
                  // if the item does not have that then the payload index marker starts there
                  index = args.length >= 5 ? i - 1: i;
             }
        }

        /*
            if the index varibale is not undefined 
            then slice the rest of the args varibale 
            as the intail payload
            
            else return a empty array as the payload
        */
        obj.payload = args[index] !== undefined ? args.slice(index, args.length) : [];

        /*
            if a callback was given or does not equal undefined then
            return the callback 
            
            else return back the object
        */
        return callback !== undefined ? callback(null, obj) : console.log( args );
    }
};
