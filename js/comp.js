const tellNum = () => {
    let numeroAl = Math.random() * 8;

    numeroAl = Math.floor(numeroAl);

    return numeroAl;
}


let jugadaVsComp = true;

const VS2 = () => {
    if (jugadaVsComp) {
        listaDeBloques.forEach((block) => {
            block.addEventListener(`click`, () => {
                let index = block.getAttribute(`name`);
                if (mapaaDeJuego[index] === undefined) {
                    jugadaVsComp = false;
                    printStyle(block, `x`);
                    mapeo(index, `x`);
                    confirmFinish();
                    printComp();
                }
            })
        })
    }
}


const numComp = () => {
    let finalizar = false
    for (let i = 0; i < 9; i++) {
        let index = tellNum();
        if (mapaaDeJuego[index] === undefined) {
            finalizar = true
            return index
        }
    }

}

const printComp = () => {
    let index = numComp();
    listaDeBloques.forEach((block) => {
        if (block.getAttribute(`name`) == index) {
            jugadaVsComp = true;
            printStyle(block, `o`);
            mapeo(index, `o`);
            confirmFinish();
        }
    })
}