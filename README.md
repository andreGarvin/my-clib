# my-clib.js creating command line tools much faster and easier.

## Why was this project created ?
#### The reason I created my-clib.js is because I wanted to create my own version of git ( aka source control management system ) but ended making the basic functionality of a command line tool instead of actually building the software.
#### Later I tried looking for node modules to help me build much faster and easier but they were built with configuration and third party dependencies and poorly written documentation. So I decide to build a light weight node module for this purpose and less configuration as possible.


## How easy is it to use my-clib.js

### code example:
```js
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
```

```bash
node app.js GET https://www.github.com/andreGarvin/my-clib

{ header: 'text/html; charset=utf-8',
  server: 'GitHub.com',
  date: 'Thu, 01 Jun 2017 14:24:05 GMT',
  status: 200,
  url: 'https://www.github.com/andreGarvin/my-clib' }
```


## How does my-clib.js work and what are its methods ?
#### The code example above is a very simple way to set up the node module, this a module that comes with much more and great tools to make your cli application very efficient.

### Documentation
# Link to module
<a href="https://andregarvin.github.io/my-clib/">documentation</a>

#### These methods are very easy use and tinker around when creating your own cli tool or configure to your already existing application, so feel free to edit the code and so forth. Also contribute any new ideas or methods to make the module amazing, make a issue or pull request on tis project.

#### You can also contact me on twitter for any new ideas or implementations.
