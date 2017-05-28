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
    fs.exists(dest_file, (exst) => {
      /*
          if the file does not exist catchError()
          passing the callback if not undefined
      */
      if (!exst) {

          return tool.catchError(`*error: '${ dest_file }' does not exist.`, (err) => {

              console.log(err.msg);

              console.log(`\n creating logger document '${ dest_file }'.`);
              fs.open(dest_file, 'w', (err, fd) => {
                  if (err) return tool.catchError(err.message, callback === undefined ? undefined : callback);

                  fs.writeFileSync(dest_file, format, 'utf8');

                  return format || callback(null, format);
              })
          });
      }

      // if the file exist get the ata from the 'dest_file'
      // then format the data from the input argument
      data = fs.readFileSync(dest_file, 'utf8');

      // concatinate the data from the file 'looger' file or 'logger data' with the new fromated data
      data = data += format;
      if ( callback !== undefined ) {

          // write to the file in utf8 format and concatenat the data from the 'dest_file' and the 'fomat'
          fs.writeFile(dest_file, data, 'utf8', (err) => {
              // if there is a error then return catchError() with a callback() if one is provided.
              if (err) return tool.catchError(err.message, callback === undefined ? undefined : callback);

              // else return back the fomat or the callback if on was provided and the 'format'
              return callback(null, format);
          });
      }

      try {

           fs.writeFileSync(dest_file, data, 'utf8');
	         return format;
      }
      catch (e) {

             return tool.catchError(e);
      }

    });
};
