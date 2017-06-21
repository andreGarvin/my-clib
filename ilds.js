'use strict';

const fs = require('fs'),
path = require('path'),
tool = require('./tools.js');

// loads the json file
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

            return callback === undefined ? data : callback( null, data )
        }
        else {
            
            return return tool.catchError(`*error: File path '${ file_name }' does not exist.`, callback === undefined ? undefined : callback){
        }
    }
    catch (err) {

        // if there is a error the return catchError() with a callback{} if one as provided.
        return tool.catchError(err, callback === undefined ? undefined : callback)
    }
    
};


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
