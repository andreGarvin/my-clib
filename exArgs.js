function method( input, data ) {
    
    switch ( input ) {
        case 'a':
            
            data = data + 1;
            break;
        
        case 's':
            
            data = data - 1;
            break;
    }
    
    return data;
}

function exArgs( arr, method, data ) {
    
    var output;
    for ( var i = 0; i <= arr.length; i++ ) {
        
        if ( i === arr.length ) {
            
            return output;
        }
        
        output = method(arr[i], data);
    }
    
}

var output = exArgs(['s', 'a'], method, 5);

console.log( output );