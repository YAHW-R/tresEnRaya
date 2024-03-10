const checkbox = document.querySelector(`.checkbox`);
const checkButtom = document.querySelector(`.checkbuttom`);
const titleCheckbox = document.querySelector(`.title__checkbox`);
const backend = document.querySelector(`.backend__checkbox`);


const vscomp = () => {
    titleCheckbox.textContent = ` vs comp`;
    titleCheckbox.style = `text-shadow: 0 0 40px #000;`
    CheckView = true;
}

const vs11 = () => {
    titleCheckbox.textContent = `1 vs 1`;
    titleCheckbox.style = `text-shadow: 0 0 40px #000;`
    CheckView = false;
}

checkButtom.addEventListener(`click`, () => {
    if (checkButtom.classList.contains(`checkbox__contains`) == false) {
        checkbox.classList.toggle(`checkbox__checked`);
        titleCheckbox.classList.toggle(`title__checkbox__ani`);
    }
    if (checkbox.classList.contains(`checkbox__checked`)) {
        vscomp();
    }
    else {
        vs11();
    }


})


const eliminarCheckbox = () => {
    checkButtom.style.display = `none`;
    backend.style.display = `none`;
}


checkbox.addEventListener(`click`, () => {
    backend.classList.add(`backend__checkbox__ani`);

    setTimeout(eliminarCheckbox, 1900);

    CheckView = checkbox.classList.contains(`checkbox__checked`);

    if (checkbox.classList.contains(`checkbox__checked`)) {
        checkButtom.classList.add(`checkbox__contains2`);
        VS2();
    }
    else {
        VS1();
        checkButtom.classList.add(`checkbox__contains`);
    }

})
