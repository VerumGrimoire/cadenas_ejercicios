//Ejercicios String/Cadenas 12/12/22

//entontrar el caracter que más se repite
{let nombre = "Abraham"

let char = nombre.charAt();
nombre = nombre.toLocaleUpperCase();
let duplicados1 = [];

for (let contador = 0; contador < char; contador++){
    if (char[contador] === char[contador+1]) {
        duplicados1.push(char[contador]);
    }
    if (char[contador+1] === char[contador+2]) {
        duplicados1.push(char[contador]);
    }
    if (char[contador+3] === char[contador+4]) {
        duplicados1.push(char[contador]);
    }
    if (char[contador+4] === char[contador+5]) {
        duplicados1.push(char[contador]);
    }
    if (char[contador+5] === char[contador+6]) {
        duplicados1.push(char[contador]);
    }
}



console.log(duplicados1);

}



    let nombre = "Abraham"
nombre = nombre.toUpperCase();
let letra="";
let contFinal=0;
for (let index =0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp=1;
    for (let cont = index+1; cont < nombre.length; cont++) {
        if(nombre.charAt(index) == nombre.charAt(cont))
            contTemp++;
    }
    if (contTemp>contFinal) {
        contFinal=contTemp;
        letra = nombre.charAt(index);
    }
}


console.log(letra, contFinal);
