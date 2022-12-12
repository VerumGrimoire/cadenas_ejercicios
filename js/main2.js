//entrada

//Laura Aline

//Resulado esperado 

// enilA aruaL


// function invertirCadena(cad) 


    function reves(str) {
        let tempStr="";
    for (let i = str.length - 1; i >= 0; i--) {
        tempStr += str.charAt(i); 
    }
        return tempStr;  
    
     
}
 
// console.log( invertirCadena ("Laura Aline "));


//Reconocer un Palíndromo

function esPalindromo(str){
    str =str.toLowerCase();
    str =str.replaceAll(" "," ");
    if (reves(str)==str) 
        return true;


    return false;
}