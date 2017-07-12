
module.exports.pipeline = ( arr_funcs, data ) => {
    /*
        This function takes a array for functions
        and the data it wants to be mutated/changed
        then returns back the that changed data.
    */
    let last_result = data;
    for ( let f in arr_funcs ) {

        last_result = arr_funcs[f]( last_result )
    }

    return last_result;
};



// goes through an array and checks if the item exsit
module.exports.includes = ( arr, item ) => {

  for ( var i in arr ) {

    if ( arr[i] === item ) {

      // if the item is found/exists then retur true.
      return true;
    }
  }

  // if the item is not found then return false.
  return false;
};



module.exports.zip = ( arr1, arr2, callback ) => {
  /*
  This function goes through two arrays simultaneously
  and executes the callback returned conditional.
  */
  var newArray = [];
  for ( i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++  ) {

    newArray.push( callback( arr1[i], arr2[j] ) )
  }

  return newArray;
};



module.exports.exArgs = ( method, arr_args, data ) => {

    /*
        assign data to output so when it passes it to method
        on the first run it does not reference the sa,e value
        and rsssings to a new value.

        Mutates the data base on the the number of
        arguements and payload size.
    */
    var output = data;
    for ( var i = 0; i < arr_args.length; i++ ) {

        // call the mwthod again nd pass in the data
        output = method(arr_args[i], output);
    }

    return output;
};



module.exports.prompt = ( input, callback ) => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question(input, ( output ) => {

        if ( output.length == 0 || output === undefined ) {

            rl.close();
            return callback({
                status: false,
                msg: 'error: No datawas passed in'
            }, undefined)
        }


        rl.close();
        return callback(null, {
            data: output,
            status: true
        })
    })
};



module.exports.catchError = ( err, callback ) => {

    // checking if the callback param is undefined
    if ( callback === undefined ) {

        /*
            // check if in debug or dev mode
            if ( mode === 'debug' ) {

                // log to the console and break the chain flow
                return console.error( err || err.msg || `*error: ${ err.message.split(' ').splice(1, err.message.split(' ').length).join(' ') }.`);
            }
        */

        // else if not in debug mode or is 'mode' is eqaul to undefined
        // log to the console and return
        return console.log( err.msg || err || `*error: ${ err.message.split(' ').splice(1, err.message.split(' ').length).join(' ') }.`);
    }

    // if the callback is not undefined then return callback
    return callback({
        // return back whatever error message is not null or undefined
            // for the 'err.message' remove the JavaScript error tags
        msg: err.msg || err || `*error: ${ err.message.split(' ').splice(1, err.message.split(' ').length).join(' ') }.`,
        status: false
    });
};



// internal logger
module.exports.logger = ( dest_file, input, callback ) => {

    /*
        requires the fs module and the tools module.

        Also 'new Date' and formates the date.

        lastly declaring but never using two varibles.
    */
    const fs = require('fs'),
    tool = require('./tools.js'),
    date = new Date,
    formatedDate = `${ date.getMonth() }/${ date.getDate() }/${ date.getFullYear() } ${ date.getHours() > 12 ? date.getHours() - 12 : date.getHours() }:${ date.getMinutes() } +0000`;
    var data, format;

    // if the 'input' os a obj or array then strinfgy or return input if a string
    format = `\n # ${ formatedDate } \n\t ${ JSON.stringify( input ) || input }\n`;


    // checks if the file exist
    var exst = fs.exists(dest_file);

    /*
        if the file does not exist catchError()
        passing the callback if not undefined
    */
    if (!exst) {

        return tool.catchError(`*error: File'${ dest_file }' does not exist.`, (err) => {

            console.log(err.msg);

            console.log(`\n creating logger document '${ dest_file }'.\n
            action => ${ input.action } : ${ format }`);
            fs.writeFileSync(dest_file, format, 'utf8');

            return format || callback(null, format);
        })
    }

    // if the file exist get the ata from the 'dest_file'
    // then format the data from the input argument
    data = fs.readFileSync(dest_file, 'utf8');

    // concatinate the data from the file 'looger' file or 'logger data' with the new fromated data
    data = data += format;

    // ru the script and catch any errors
    try {

        // write to the file in utf8 format and concatenat the data from the 'dest_file' and the 'fomat'
        fs.writeFileSync(dest_file, data, 'utf8');
        return callback !== undefined ? callback(null, {
            status: true,
            msg: `action => ${ input.action } : ${ format }`
        }) : console.log(`action => ${ input.action } : ${ format }`)
    }
    catch (e) {

        return tool.catchError(e);
    }
};
