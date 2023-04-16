let letrasDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];


let dni = 0
let continuar = true
    
while (continuar) {
    dni = parseInt(prompt("Ingrese DNI"));

       if (dni>0 || dni<99999999 || dni==isNaN )
       {
           alert(`Su letra correspondiente es ${letrasDni[dni%23]}`);
        
           
       }else if (dni <0 || dni >99999999 ||dni !=isNaN||continuar!==true){

        alert("DNI no valido");
        
       }
         continuar = confirm("intentar nuevamente");
    }      
    