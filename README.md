 ## freebie.js is the node module to help build command line interfaces much faster and easier.

 #### freebie is a very great node module that helps programmers build command line tools tools for what there imagination leads them.

 ```
 /*
    Here is a code example on how to set up bin.js
    making my own very simple version of curl.
*/

var freebie = require('freebie');


var method = function( action, obj ) {

    switch( action ) {

        case 'GET':

            var axios = require('axios');

            axios.get(obj.payload[0])
            .then( ( resp ) => {
                if (resp.status !== 'OK') return freebie.catchError(`*error: The request responded back with a ${ resp.status }`);


                console.log( resp );
            });

            break;

        default:

            console.log(`*error: Command '${ action }' is undefined.`);

            break;
    }
};

freebie.argParser(process.argv, ( err, obj ) => {
    if (err) return freebie.catchError(err);

    freebie.dispatch_action(method, obj);
})

```
## How does freebie.js work and what are its methods ?

#### The code example above is a very simple way to set up the node module, this a module that comes with many things such as:
<br />

### Methods:
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

#### These methods are very easy to tinker around with the module and configure it to your application, so feel free to edit the code and so forth.

## contributors:
### andreGarvin: andregarvin718@gmail.com
