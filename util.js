var multihashing = require('multihashing');

var util= new Object();
// Hash is the global IPFS hash function. uses multihash SHA2_256, 256 bits
util.hash= function(data){
   return multihashing(data, 'sha2-256');

}
util.isBrowser=function(){
    try {
        return !!window;
    }
    catch(e){
        return false;
    }
};
module.exports =util;