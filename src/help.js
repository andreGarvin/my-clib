var fs = require('fs');

/**
  * This function displays commands and description of the
  * of the cli application/tool from the clihelp.json file
  * passing the name of the command will show the command,
  * it's uses cases, and a description about the command.
  * If the fucntion recvies no action it displays all the
  * commnds in the cli tool.
  * @param {string} action the command from the cli tool
*/
module.exports.manual = ( action ) => {

    if ( action === undefined ) {
        fs.readFile('./help.json', 'utf8', (err, manual_doc) => {
            if (err) return console.log(`error: ${ err.message }`)

            manual_doc = JSON.parse( manual_doc );

            console.log(`${ manual_doc.header }\n`);
            for ( var i in manual_doc ) {
                if ( i !== 'header' && i !== 'manual' ) {

                    console.log(`~ ${ i }: ${ manual_doc[i].description }`);
                    for ( var j in manual_doc[i].commands ) {
                        console.log(`\t${ j }: ${ manual_doc[i].commands[j] }`);
                    }
                }
            }
        })

        return;
    }

    fs.readFile('./help.json', 'utf8', (err, manual_doc) => {
            if (err) return console.log(`error: ${ err.message }`)

            manual_doc = JSON.parse( manual_doc );
            if ( Object.keys( manual_doc ).includes( action[0] ) ) {

                console.log( `~ ${ action }: ${ manual_doc[ action ].description }` );
                for( var e in manual_doc[ action ].commands ) {
                    console.log(`\t${ e }: ${ manual_doc[ action ].commands[e] }`);
                }
                return;
            }

            console.log(`error: Command '${ action }' is unkown.`);
    })
};
