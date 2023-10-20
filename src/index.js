module.exports = function reverse (n) {
    if (n % 10 === 0  &&  n < 0) {
        n = n / 10 * (-1);
        return Array.from(String(n), Number).reverse().join('');
    } if( n % 10 === 0 ) {
        n = n / 10;
        return Array.from(String(n), Number).reverse().join('');
    } if ( n > 0) { 
        return Array.from(String(n), Number).reverse().join('');
    } if( n < 0) {
        n = n * (-1);
       return Array.from(String(n), Number).reverse().join('');
    }  
}
