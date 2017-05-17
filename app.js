var bin = require('./bin/index.js');


bin.onload('cli.json', (err, data) => {
    if (err) return bin.catchError(err.msg);

    bin.global_state = data;
    
    // bin.catchError('*error: this is debbuging test', undefined, 'debug');
    /*
      action to be the frist offset
      the arguments the second offset if there is any
      and the payload if there is any to be the rest

      if all data feilds are null || undefned || false || 0
      then terminate

      ex: var setup = {
              action: 0,
              args: 1,
              payload: '2-3'
          };
    */


    bin.argParser(process.argv, (err, obj) => {
        if (err) return bin.catchError(err);
        
        // console.log(obj);
        // bin.logger('looger', obj);

        bin.dispatch_action(obj, bin.global_state);
    });

});
