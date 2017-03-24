var domQuery = (function(){

  var cache = {};

  //Checks cache, if in cache element is returned, if not, element is inputted.
  function cacheCheck(elementID){
    if(elementID in cache){
      return cache[elementID];
    }else{
      cache[elementID] = document.querySelector(elementID);
      return cache[elementID];
    }
  }

  return{
    cacheCheck: cacheCheck,
  };


});

var myDom = domQuery();