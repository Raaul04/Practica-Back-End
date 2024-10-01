let discos: number[]=[1,2,3]
let torreInicial="Torre A"
let torreFinal= "Torre B"
let torreAuxiliar="Torre C"

mueve(discos.length, torreInicial, torreFinal, torreAuxiliar,discos)

function mueve (numeroDiscos:number, torreInicial:string, torreFinal: string, torreAuxiliar:string, discos:number[]){
    if(numeroDiscos===1){
        console.log("Se mueve el disco"+ discos[numeroDiscos-1] + " desde "+ torreInicial+" hacia "+ torreFinal) 
    }
    else{
        mueve(numeroDiscos-1, torreInicial, torreAuxiliar, torreFinal,discos)
        console.log("Se mueve el disco"+ discos[numeroDiscos-1] + " desde "+ torreInicial+" hacia "+ torreFinal) 
        mueve(numeroDiscos-1, torreAuxiliar, torreFinal, torreInicial,discos);
    }
}


