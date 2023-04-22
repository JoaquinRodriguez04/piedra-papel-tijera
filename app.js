// variables

// buttons
const piedra = document.getElementById("piedra")
const papel = document.getElementById("papel")
const tijera = document.getElementById("tijera")

// h2
const resultadoPc = document.getElementById("resultadoPc")
const resultadoFinal = document.getElementById("resultado")
const pointsUser = document.getElementById("pointsUser")
const pointsIa = document.getElementById("pointsIa")


// points
let countpointsUser = 0
let countpointsIa = 0

// functions

// function > updatePoints

function updatePoints(resFinal){
    if(resFinal === "ganaste"){
        countpointsUser++;
        pointsUser.innerHTML = countpointsUser
    }
    else if(resFinal === "perdiste"){
        countpointsIa++;
        pointsIa.innerHTML = countpointsIa
    }
}

// function > returnIa

function returnIa(){
    let resultadoIa = []
    let valueIa = Math.floor(Math.random()*3)

    if(valueIa === 0){
        resultadoIa = "piedra"  
    }
    else if(valueIa === 1){
        resultadoIa = "papel" 
    }
    else if(valueIa === 2){
        resultadoIa = "tijera" 
    }

    return resultadoIa
}

// function > user

function returnPiedra(){
    let resIa = returnIa() 
    let resFinal = []


    if(resIa === "piedra"){
        resFinal += "empate"
        resultadoPc.innerHTML = resIa
        resultadoFinal.innerHTML = `<p class ="draw">${resFinal}</p>`
    }
    else if(resIa === "tijera"){
        resFinal += "ganaste"
        resultadoPc.innerHTML = resIa
        resultadoFinal.innerHTML = `<p class ="win">${resFinal}</p>`
        updatePoints(resFinal)
    }
    else if(resIa === "papel"){
        resFinal += "perdiste"
        resultadoPc.innerHTML = resIa
        resultadoFinal.innerHTML = `<p class ="lost">${resFinal}</p>`
        updatePoints(resFinal)
    }
    
    return resFinal
}


function returnPapel(){
    let resIa = returnIa() 
    let resFinal = []

    if(resIa === "piedra"){
        resFinal += "ganaste"
        resultadoPc.innerHTML = resIa
        resultadoFinal.innerHTML = `<p class ="win">${resFinal}</p>`
        updatePoints(resFinal)
 
    }
    else if(resIa === "tijera"){
        resFinal += "perdiste"
        resultadoPc.innerHTML = resIa
        resultadoFinal.innerHTML = `<p class ="lost">${resFinal}</p>`
        updatePoints(resFinal)
 
    }
    else if(resIa === "papel"){
        resFinal += "empate"
        resultadoPc.innerHTML = resIa
        resultadoFinal.innerHTML = `<p class ="draw">${resFinal}</p>`
    }

    return resFinal
}

function returnTijera(){
    let resIa = returnIa() 
    let resFinal = []


    if(resIa === "piedra"){
        resFinal += "perdiste"
        resultadoPc.innerHTML = resIa
        resultadoFinal.innerHTML = `<p class ="lost">${resFinal}</p>`
        updatePoints(resFinal)
    }
    else if(resIa === "tijera"){
        resFinal += "empate"
        resultadoPc.innerHTML = resIa
        resultadoFinal.innerHTML = `<p class ="draw">${resFinal}</p>`
    }
    else if(resIa === "papel"){
        resFinal += "ganaste"
        resultadoPc.innerHTML = resIa
        resultadoFinal.innerHTML = `<p class ="win">${resFinal}</p>`
        updatePoints(resFinal)
    }

    return resFinal
}



// events

piedra.addEventListener('click',returnPiedra)

papel.addEventListener("click",returnPapel)

tijera.addEventListener("click",returnTijera)


