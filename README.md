## clib.js is the node module to help build command line interfaces much faster and easier. clib.js is a very great tool for creating simple or large cli tools very quickly and painlessly.

## code example:
```
/*
    Here is a code example on how to set up clib.js
    making my own very simple version of curl.
*/
const clib = require('./clib'); // if you are using the cloned version


var method = ( action, obj ) => {

    var axios = require('axios');

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

clib.argParser(process.argv, (err, obj) => {
    if (err) return clib.catchError(err);

    // console.log( obj );
    clib.dispatch_action(method, obj);
});

```
## How does clib.js work and what are its methods ?
#### The code example above is a very simple way to set up the node module, this a module that comes with much more and great tools to make your cli application very efficient.

### Some clib.js methods comes with:
<ul>
    <h5>dispatch_action</h5>
    <h5>logger</h5>
    <h5>help</h5>
    <h5>argParser</h5>
    <h5>catchError</h5>
    <h5>includes</h5>
    <h5>onload</h5>
    <h5>save</h5>
    <h5>init</h5>
</ul>

#### These methods are very easy use and tinker around with in your module and configure it to your application, so feel free to edit the code and so forth and contribute any new ideas or methods to make the module amazing.
