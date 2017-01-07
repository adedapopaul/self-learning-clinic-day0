module.exports= {

aritGeo : function (numArray){
//find the diifference and ratio between the 1st and 2nd element
  var ratio = numArray[1] / numArray[0];
  var difference = numArray[1] - numArray[0];
  var i = 0;
  var empty= false;
  var arithmetic = true;
  var geometric= true;
  var length = numArray.length;
  
//iterating within the loop to find if the list is arithmetic or geometric
  for (i=0; i< length -1 ; i++){

    
    //check if the difference between the list is true
      if((numArray[i+1] - numArray[i]) !== difference ){
         arithmetic = false;
      }
      
     //check if the ratio between the list is true which defines the geometric pattern
       if((numArray[i + 1] / ratio) !== numArray[i])
      {
        geometric = false;
      }
  //check if the list does not have consistent difference or ratio
   if (((numArray[i + 1] / ratio) !== numArray[i]) && ((numArray[i+1]- numArray[i])!== difference)){
     
    arithmetic = false;
    geometric = false;
  }
  
 
   }
  
  if(length=== 0){
      return 0
     }
      else if(geometric === true){
      
    return "Geometric";
      
    }
    else if(arithmetic === true){
    return "Arithmetic";
    }
   
    else if (arithmetic ===false  && geometric=== false){
      return -1
    }
    
    

}

}