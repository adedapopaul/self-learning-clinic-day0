module.exports= {

aritGeo : function (numArray){
  //find the diifference and ratio between the 1st and 2nd element
  var ratio =numArray[1] / numArray[0];
  var difference = numArray[1] - numArray[0];
  var i = 0;
  var arithmetic = true;
  var geometric= true;
  
//iterating within the loop to find if the list is arithmeticor geometric
  for (i=0; i< numArray.length -1 ; i++){
    
    //check if the difference between the list is true
      if((numArray[i+1] - numArray[i]) !== difference ){
         arithmetic = false;
      }
      
     //check if the ratio between the list is true which defines the geometric pattern
       if((numArray[i + 1] / ratio) !== numArray[i])
      {
        geometric = false;
      }
  //check if the list does not have consistent differenceor ratio
   if (((numArray[i + 1] / ratio) !== numArray[i]) && ((numArray[i+1]- numArray[i])!== difference)){
     
    arithmetic = false;
    geometric = false;
  }
  

   
   }
  
  if(arithmetic === true){
    return "Arithmetic";
    }
    else if(geometric === true){
      
    return" Geometric";
      
    }
    else if (arithmetic ===false  && geometric=== false){
      return -1
    }
    else if (numArray === []){
      return '0'
    }
    

}

}