# my-clib.js creating command line tools much faster and easier.

## Why was this project created ?
#### The reason I created my-clib.js is because I wanted to create my own version of git ( aka source control management system ) but ended making the basic functionality of a command line tool instead of actually building the software.
#### Later I tried looking for node modules to help me build much faster and easier but they were built with configuration and third party dependencies and poorly written documentation. So I decide to build a light weight node module for this purpose and less configuration as possible.


## How easy is it to use my-clib.js

### code example:
```js
_______________________________________________________
> app.js

/*
    Here is a code example on how to set up my-clib.js
    making my own very simple version of curl.
*/
const clib = require('my-clib');


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

// parses the arguments in the command line
clib.argParser(process.argv, (err, obj) => {
    if (err) return clib.catchError(err); // logs to the console any errors that occurred

    /*
        [if] the are no errors then
        this callback returns back a
        objects of the parsed arguments

        obj = {
            action: '',
            args: [],
            payload: []
        }
    */

    /*
        calling the method dispatch action
        resemblance to redux approach

        passing in the method and the parsed
        command line arguments
    */
    clib.dispatch_action(method, obj);
});

___________________________________________________
> command line:

node app.js GET https://www.github.com/andreGarvin/my-clib

____________________________________________________
> output:

{ header: 'text/html; charset=utf-8',
  server: 'GitHub.com',
  date: 'Thu, 01 Jun 2017 14:24:05 GMT',
  status: 200,
  url: 'https://www.github.com/andreGarvin/my-clib' }

```


## How does my-clib.js work and what are its methods ?
#### The code example above is a very simple way to set up the node module, this a module that comes with much more and great tools to make your cli application very efficient.

## Here are my-clib's methods and a descript of what they do as well as the arguments that take

#### onlaod:
  - args: file_name ( string ), callback ( function ) [ optional ]
  - description: loads the programmer makes or the 'cli.json'
    file for the bin program.

#### init: [ later feature ]
  - args: option ( obj ), callback ( function ) [ optional ]
  - description: initializing module fir the programmer
    not for the bin module itself.

#### help:
  - args: args ( array ) [ optional ], callback ( function ) [ optional ]
  - description: displays all the detail of the programmers cli application/tool
    the user can initialize a default with the bin cli and configure the application.

#### catchError:
  - args: err ( string || object ), callback ( function ) [ optional ]
  - description: this it a internal tool for programmers to use in there application.

#### includes:
  - args: arr ( array ), item ( string ), callback ( function ) [ optional ]
  - description: This is a internal tool used in the bin application and can be used
    other programmers programs/scripts.

#### argParser:
  - args: args ( array ), callback ( function ) [ optional ]
  - description: this command line argument parsing tool used to
    parse out the arguments passed to your project or application.

#### logger:
  - args: file_name ( string ), input ( any data type )
  - description: this is a logger of all the commands passed to bin
    or the programmers application/program.

#### pipeline:
  - args: arr_funcs ( array ), data ( any data type )
  - description: pipeline is a function takes a array for functions
    and the data it wants to be mutated/changed then returns back
    the that changed data.

#### dispatch_action:
  - args: method ( function ), payload ( obj )
  - description: This is a internal tool used and sends any actions
    that the program needs to execute.

#### exArgs:
  - args: method ( function ), arr ( array ), data ( object )
  - description: returns back the modified data based on all the arguments
    passed into the function.

#### prompt:
- args: input ( string ), callback ( function )
- description: Prompts user for input through your application.
- improvements: making this method run synchronously.

#### zip:
  - args: arr1 ( array ), arr2 ( array ), callback ( function )
  - description: This function goes through two arrays simultaneously
    and executes the callback returned conditional.

#### bin.js:
- args: null
- description: this is a small cli tool to generate a simple template
  for the bin project for users


#### These methods are very easy use and tinker around when creating your own cli tool or configure to your already existing application, so feel free to edit the code and so forth. Also contribute any new ideas or methods to make the module amazing, make a issue or pull request on tis project.

#### You can also contact me on twitter for any new ideas or implementations.
