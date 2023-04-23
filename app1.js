
function calculator(v)
 {
   
   let result=document.getElementById('result');
  

     switch(v)
     {
  
      case'=': result.value=eval(result.value) ;
                 break
      case'C': result.value="" ;
                 break
      default:
        result.value+=v;
     }  

 }