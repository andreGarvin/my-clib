var fs = require('fs');

// var command = require('./command.js');


// exports the manual
exports.manual = ( action ) => {

    if ( action === undefined )
        fs.readFile('./lib/help.json', 'utf8', (err, manual_doc) => {
            if (err) {

                console.log(`error: ${ err.message }`);
                return;
            }

            console.log('\n<bin command line arguements manual.>\n');

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

            console.log(`\ncopyright (${ manual_doc.manual.license }) 2017 by ${ manual_doc.manual.aurthor }: version ${ manual_doc.manual.version }.\n`);
        })

    else if ( action !== undefined )

        fs.readFile('./lib/help.json', 'utf8', (err, manual_doc) => {
            if (err) {

                console.log(`error: ${ err.message }`);
                return;
            }

            manual_doc = JSON.parse( manual_doc );

            if ( command.includes( Object.keys( manual_doc ), action[0] ) ) {

                console.log('\n<bin command line arguements manual.>\n');

                console.log( `~ ${ action }: ${ manual_doc[ action ].description }` );

                for( var e in manual_doc[ action ].commands ) {
                    console.log(`\t${ e }: ${ manual_doc[ action ].commands[e] }`);
                }

                return;
            }

            console.log(`bin: command '${ action }' is unkown.`);
        })

}

// bitKeeper: https://www.bitkeeper.com/

// help function
// add  function()
// push function
// stat function
// restore function
// drop function
// delete function
// bin dropbox --oauth true
// bin drive --oauth true
// bin --api create || run || kill <api name>
// list directory || bin directory
