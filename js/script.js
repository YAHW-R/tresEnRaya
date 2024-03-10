const blocks = document.querySelectorAll(`.block`);
const gameOver = document.querySelector(`.game__over`);
const buttomOfReinicio = document.querySelector(`.buttom`);
const winSection = document.querySelector(`.win`);


let mapaaDeJuego = [undefined, undefined, undefined,
    undefined, undefined, undefined,
    undefined, undefined, undefined];

let jugada = true;

const listaDeBloques = [...blocks];


const mapeo = (place, value) => {
    mapaaDeJuego[place] = value;
}

const llamarFinal = (winer = `tie`) => {
    gameOver.classList.add(`game__over__finish`);
    winSection.textContent = `${winer} winer`;
}

const confirmFinish = () => {

    if (confirmar(0, 1, 2)) {
        llamarFinal(mapaaDeJuego[0]);
        return true;
    }
    else if (confirmar(3, 4, 5)) {
        llamarFinal(mapaaDeJuego[3]);
        return true;
    }

    else if (confirmar(6, 7, 8)) {
        llamarFinal(mapaaDeJuego[6]);
        return true;
    }
    else if (confirmar(0, 3, 6)) {
        llamarFinal(mapaaDeJuego[0]);
        return true;
    }
    else if (confirmar(1, 4, 7)) {
        llamarFinal(mapaaDeJuego[1]);
        return true;
    }
    else if (confirmar(2, 5, 8)) {
        llamarFinal(mapaaDeJuego[2]);
        return true;
    }
    else if (confirmar(0, 4, 8)) {
        llamarFinal(mapaaDeJuego[0]);
        return true;
    }
    else if (confirmar(2, 4, 6)) {
        llamarFinal(mapaaDeJuego[2]);
        return true;
    }
    else if (todosIguales()){
        llamarFinal();
    }

}

const confirmar = (a, b, c) => {
    let partEvalue = undefined;
    partEvalue = sonIguales(mapaaDeJuego[a], mapaaDeJuego[b], mapaaDeJuego[c])
    if (partEvalue) { return true }
    return false

}

const sonIguales = (value1, value2, value3) => {
    if (value1 == value2 && value2 == value3 && value3 !== undefined) {
        return true;
    }
    return false;

}

const todosIguales = ()=>{
    for (let part of mapaaDeJuego){
        if (part === undefined){
            return false
        }
    }
    return true
}


const printStyle = (block, value) => {
    let x = true;
    if (value == `o`) {
        x = false
    }
    block.style = `background: ${x ? `url(./img/x.svg), #f42` : `url(./img/o.svg), #27f`}; background-size: 35%; background-repeat: no-repeat; background-position: center; filter: drop-shadow:(${x ? `0 0 20px #f42` : `0 0 20px #27f`})`
}

const reiniciar = () => {
    gameOver.classList.remove(`game__over__finish`);

    for (index in mapaaDeJuego){
        mapaaDeJuego[index] = undefined;
    }


    listaDeBloques.forEach((block) => {
        block.style = `background: #777;`;
    })
}

buttomOfReinicio.addEventListener(`click`,()=>{
    reiniciar();
})



const VS1 = () => {
    listaDeBloques.forEach((block) => {
        block.addEventListener(`click`, () => {
            let index = block.getAttribute(`name`);
            if (mapaaDeJuego[index] === undefined) {

                if (jugada === true) {
                    jugada = false;
                    printStyle(block, `x`);
                    mapeo(index, `x`);
                }
                else {
                    jugada = true;
                    printStyle(block, `o`);
                    mapeo(index, `o`);
                }

                confirmFinish();
            }


        })
    })
}