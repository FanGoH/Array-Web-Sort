const fileUpload = document.querySelector("input.fileButton");
const display = document.querySelector("div.display");
let array = [];




const fillDisplay = () => {
    display.style = "height: 400px;";
    
    for(let i = 0; i<array.length; i++) {
        const element = document.createElement('div');
        element.classList.add("bar");
        const height = (array[i]*5);
        element.style = `height: ${height}px; background-color: aqua;
        width: 20px; border: solid black 1px;`;

        display.appendChild(element);
    }

}



fileUpload.addEventListener("change", (e) => {

    const reader = new FileReader();
    const file = fileUpload.files[0];

    reader.readAsText(file);

    reader.addEventListener("load", () => {
        array = reader.result.split(`\n`).map((numero) => parseInt(numero));

        fillDisplay();
    });
    
});