function cool(){
var name=["john","Jen","pau","krishisan","yakkkov"];
     for(var i=0;i<name.length;i++)
         { 
        var firstletter=name[i].charAt(0);
      if(firstletter=="j" || firstletter=="J"){
        speak2(name[i]);
             }
             
         else{
            speak1(name[i]);
               }
            }
    
}
cool();



