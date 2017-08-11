const bin = require('./index.js');

/**
  * This function creates a application tamplet for the the users cli application
  * using my-clib
  * @function
  * @param {string} app_name this is your application name
*/
function createApp( app_name ) {

    var app_template = `

    const bin = require('./index.js');

    var mrethod = ( action, obj ) => {

        switch ( action ) {

            case 'bin':

                console.log('Welcome to bin, the awesome node module to help building cli tools much faster and easier.');
                break;
            default:

                console.log('*error: This command ' + action + ' does not exist.');
                break;
        }
    };


    bin.onload('cli.json', (err, data) => {
        if (err) return bin.catchError(err);

        bin.argParer(process.argv, (err, obj) => {
            if (err) return bin.catchError(err);

            bin.logger('.logger', obj);


            bin.dispatch_action(method, obj);
        });
    }`;
    var fs = require('fs');

    console.log(`bin: creating '${ app_name }' in ${ __dirname }/${ app_name }`);
    fs.mkdir(`./${ app_name }`, (err, resp) => {
        if (err) return bin.catchError(err);

        fs.writeFile(`./${ app_name }/app.js`, app_template , (err) => {
            if (err) return bin.catchError(err);
        });
    })

}

var method = ( action, obj ) => {

    switch ( action ) {

        case 'create':
            var app_name = obj.payload[0];

            createApp(app_name);
            break;

        default:

            console.log(`*error: This command '${ action }' does not exist.`);
            break;
    }
}

bin.argParser(process.argv, (err, obj) => {
    if (err) return bin.catchError(err);

    bin.dispatch_action(method, obj);
});
