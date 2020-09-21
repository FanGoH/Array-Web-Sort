const fileUpload = document.querySelector("input.fileButton");
const display = document.querySelector("div.display");

const speedConstant = 1000;
let SPEED = document.querySelector(".speed").value;

let array = [];
let originalArray = [];

const fillDisplay = () => {
    display.style = "height: 370px;";
    
    for(let i = 0; i<array.length; i++) {
        const element = document.createElement('div');
        element.classList.add("bar");
        const height = (array[i]*5);
        element.style.height = `${height}px`;

        display.appendChild(element);
    }

}

const reset = () => {
    array = originalArray.slice();
    display.innerHTML = "";
    fillDisplay();
}

const afterRead = () => {
    fileUpload.style.display = "none";
    document.querySelector("label.hide").innerHTML = "";

    document.querySelectorAll(".none").forEach((element) => {element.classList.toggle("none")});


    fillDisplay();

}

fileUpload.addEventListener("change", (e) => {

    const reader = new FileReader();
    const file = fileUpload.files[0];

    reader.readAsText(file);

    reader.addEventListener("load", () => {
        array = reader.result.split(`\n`).map((numero) => parseInt(numero));
        originalArray = array.slice();
        afterRead();
    });
    
});

const ranArray = () => {

    display.innerHTML = "";
    array = [];
    originalArray = [];

    const numberOfElements = document.querySelector(".numberElements").value;

    for(let i = 0; i < numberOfElements; i++) {
        array.push(Math.floor(Math.random()*50)+1);
    }

    originalArray.slice();

    afterRead();

}


document.querySelector(".reset").addEventListener("click", reset);

document.querySelector(".fillArray").addEventListener("click", ranArray);

document.querySelector(".speed").addEventListener("change", (evt) => {

    SPEED = evt.target.value;

});