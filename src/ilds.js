'use strict';

const fs = require('fs'),
path = require('path'),
tool = require('./tools.js');

/**
  * Loads the JSON cli config 'cli.json' for the cli tool to use
  * @param {string} file_name give file name path that is a string
  * @param {function} callback a callback function that returns a {err} or that
  * cli.json application config.
  * @return {callback}
*/
exports.onload = function( file_name, callback ) {

    try {
        file_name = path.resolve( file_name );


        let exst = fs.existsSync(file_name);
        // checks if the file exist
        if ( exst ) {

            var data = fs.readFileSync(file_name, 'utf8');

            // if the data is not empty load it the object property 'global_state' or wherever
            if ( data === undefined || data === null || data.length === 0 ) {

                return tool.catchError(`*error: No data was able to be retreived from ${ file_name }.`, callback === undefined ? undefined : callback)
            }

            return callback === undefined ? data : callback( data )
        }
        else {

            return tool.catchError(`*error: File path '${ file_name }' does not exist.`, callback === undefined ? undefined : callback)
        }
    }
    catch (err) {

        // if there is a error the return catchError() with a callback{} if one as provided.
        return tool.catchError(err, callback === undefined ? undefined : callback)
    }

};

/**
  * Saves a data of any type of input and writes to a given file name path of
  * that data then it must return a callback.
  * @function
  * @param {string} path file name
  * @param {(string|Object|number|array)} data any data type passed to the svae function
  * @param {function} callback callback returns a err or the saved data.
  * @return {callback}
*/
module.exports.save = (path, data, callback) => {

    try {

        path = path.resolve( path );

        fs.writeFile(path, data);

        return callback !== undefined ? callback(null, {
            msg: `${ typeof data === 'string' ? data.length : 'inputed data' } was saved to '${ path }.'`,
            status: true
        }) : console.log(`${ typeof data === 'string' ? data.length : 'data' } was saved to '${ path }'`)
    }
    catch (e) {

        return tool.catchError(err, callback === undefined ? undefined : callback);
    }
};
