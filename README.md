## bin.js is the node module to help build command line interfaces much faster and easier.
 
#### bin is a very great node module that helps programmers build command line tools tools for what there imagination leads them.
 
```

/*
    Here is a code example on how to set up bin.js
    making my own very simple version of curl.
*/

const bin = require('./bin'); // if you are using the cloned version


var method = ( action, obj ) => {
    
    var axios = require('axios');
    
    switch ( action ) {
        
        case 'GET':
            
            var url = obj.payload[0],
            htttpObj;
            axios.get(url)
                .then((resp) => {
                    if (resp.status !== 200) return bin.catchError(`*error: status code is a '${ resp.status }'.`);
                    
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
                    
                    bin.catchError(`*error: ${ err.message }'.`);
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

bin.argParser(process.argv, (err, obj) => {
    if (err) return bin.catchError(err);
    
    // console.log( obj );
    bin.dispatch_action(method, obj);
});

```
## How does bin.js work and what are its methods ?

#### The code example above is a very simple way to set up the node module, thisa module comaes with many things such as: 
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

#### these methods are very esay to tinker around with, so feel free to edit the code and so forth.

## contributors:
### andreGarvin: andregarvin718@gmail.com