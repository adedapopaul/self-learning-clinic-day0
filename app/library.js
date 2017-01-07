module.exports = {
  findMinMax : function(num){
  
  var minMaxArray = [];
  var minNumber = num[0];
  var maxNumber = num [0];


   if (typeof(num) !== "object"){
    return undefined;
   }

  for( var i=0; i<num.length; i++ ){
    if(num[i] < minNumber ){
      minNumber = num[i];
    }

    if( num[i] > maxNumber){
      maxNumber = num[i];
    }
    
  }

   if ( maxNumber === minNumber ){
     minMaxArray.push(maxNumber);
   }
  
   else {
      minMaxArray.push(minNumber);
      minMaxArray.push(maxNumber);
    }
  return minMaxArray;
}

}
