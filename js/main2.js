//entrada

//Laura Aline

//Resulado esperado 

// enilA aruaL


function invertirCadena(cad) {

    let nuevaCadena = "Laura Aline";
 
    
    for (let i = cad.length - 1; i >= 0; i--) { 
        nuevaCadena += cad[i]; 
    }
    return nuevaCadena;   
}
 
console.log( invertirCadena ("Laura Aline "));