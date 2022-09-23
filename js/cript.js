
//=====================================================================================

//funcion para verificar los servicios con que cuenta el hotel
let $d = document,
items = $d.querySelectorAll(".item"),
count =0;
$d.addEventListener("keydown", (e)=>{
  
    console.log(count)
    if(e.key=="ArrowDown"){
        if(count >= items.length){
            items[ count -1].classList.remove("efecto");
            count=0 ;
         }
       items[count].classList.add("efecto");
       if(count !=0 ){
           items[ count -1].classList.remove("efecto");
       }
      
       count++;
    }
    if(e.key=="ArrowUp"){
        if(count < 0){
            items[count-1].classList.remove("efecto");
            count=0 ;
         }
           
            items[count].classList.remove("efecto");
            items[count-1].classList.add("efecto");
            count--;
        
     
    }

});