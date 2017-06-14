# clib.js createing command line tools much faster and easier.

## Why was this project created ?
#### The reason I created clib.js is because I wanted to create my own version of git ( aka source control management system ) but ended making the basic functionality of a command line tool instead of actaully building the software.
#### Later I tried looking for node modules to help me nuild much faster and easier but they were built with configuration and throd party dependencies and poory writen documentation. So I decide to build a light weight node module for this purpose and less configuration as possibale.


## How easy is it to use clib.js

### code example:
```
_______________________________________________________
> app.js

/*
    Here is a code example on how to set up clib.js
    making my own very simple version of curl.
*/
const clib = require('./clib'); // if you are using the cloned version


var method = ( action, obj ) => {

    
    var axios = require('axios');
    
    
    // the action is to the method in the dispatch_action method
    switch ( action ) {
        
        case 'GET':
            
            var url = obj.payload[0],
            htttpObj;
            axios.get(url)
                .then((resp) => {
                    if (resp.status !== 200) return clib.catchError(`*error: status code is a '${ resp.status }'.`);

                    htttpObj = {
                        header: resp.headers['content-type'],
                        server: resp.headers.server,
                        date: resp.headers.date,
                        status: resp.status,
                        url: resp.config.url,
                        // data: resp.data,
                    };
                    console.log( htttpObj );

                })
                .catch((err) => {

                    clib.catchError(`*error: ${ err.message }'.`);
                    console.log({
                        headers: err.config.headers,
                        method: err.config.method,
                        url: err.config.url,
                        data: err.data
                    });
                })
            break;
    }
};

// parses the arguemnts in the commnad line
clib.argParser(process.argv, (err, obj) => {
    if (err) return clib.catchError(err); // logs to the console any errors that occured

    /*
        [if] the are no errors then
        this callback returns back a 
        objects of the parsed arguements
        
        obj = {
            action: '',
            args: [],
            paylaod: []
        }
    */
    
    /*
        calling the method disptach action
        resmblnce to redux apporach
        
        passing in the method and the passrsed 
        comamnd line arguements
    */
    clib.dispatch_action(method, obj);
});

___________________________________________________
> command line:

node app.js GET https://www.github.com/andreGarvin/clib

____________________________________________________
> output:

{ header: 'text/html; charset=utf-8',
  server: 'GitHub.com',
  date: 'Thu, 01 Jun 2017 14:24:05 GMT',
  status: 200,
  url: 'https://www.github.com/andreGarvin/clib' }

```


## How does clib.js work and what are its methods ?
#### The code example above is a very simple way to set up the node module, this a module that comes with much more and great tools to make your cli application very efficient.

## Here are clibs methods and a descript of what they do as well as the agruments thet take

#### onlaod:
  - args: file_name ( string ), callback ( function ) [ optional ]
  - details: loads the programmer makes or the 'cli.json'
    file for the bin program.

#### init: [ later feature ]
  - args: option ( obj ), callback ( function ) [ optional ]
  - details: initializing module fir the programmer
    not for the bin module itself.

#### help:
  - args: args ( array ) [ optional ], callback ( function ) [ optional ]
  - details: displays all the detail of the programmers cli application/tool
    the user can initialize a default with the bin cli and configure the application.

#### catchError:
  - args: err ( string || object ), callback ( function ) [ optional ]
  - details: this it a internal tool for programmers to use in there application.

#### includes:
  - args: arr ( array ), item ( string ), callback ( function ) [ optional ]
  - details: This is a internal tool used in the bin application and can be used
    other programmers programs/scripts.

#### argParser:
  - args: args ( array ), callback ( function ) [ optional ]
  - details: this command line argument parsing tool used to
    parse out the arguments passed to your project or application.

#### logger:
  - args: file_name ( string ), input ( ant data type )
  - details: this is a logger of all the commands passed to bin
    or the programmers application/program.

#### dispatch_action:
  - args: method ( function ), payload ( obj )
  - details: This is a internal tool used and sends any actions
    that the program needs to execute.

#### exArgs:
  - args: method ( function ), arr ( array ), data ( object )
  - details: returns back the modified data based on all the arguemnts
    passed into the function.

#### prompt:
- args: input ( string ), callback ( function )
- details: Prompts user for input through your application.
- improvements: makig this method run syncronessly.

#### zip:
  - args: arr1 ( array ), arr2 ( array ), callback ( function )
  - details: which is function that goes through two arrays at 
    the same time and excutes the callback based on the coniditonal 
    in the callback.

#### bin.js:
- args: null
- details: this is a small cli tool to genrate a simple template 
    for the bin project for users


#### These methods are very easy use and tinker around when creating your own cli tool or configure to your already existing application, so feel free to edit the code and so forth. Also contribute any new ideas or methods to make the module amazing, amke a issue or pull reuest on tis project.

#### You can also contact me on twitter for anyy new ideas or implementations.