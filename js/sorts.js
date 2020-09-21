// export  { swap, sleep }

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(array, indA, indB) {
    const bars = display.childNodes;
    // let min = indA;
    // let max = indB;

    if(indA > indB) {
        [ indA, indB ] = [indB, indA];
    }

    // let temp = array[indB];
    // array[indB] = array[indA];
    // array[indA] = temp;

    [array[indB], array[indA]] = [array[indA], array[indB]];


    display.insertBefore(bars[indA], bars[indB]);
    display.insertBefore(bars[indB], bars[indA]);

    return;

}


async function modifiedBubbleSort(arrayToSort) {
    let terminado = false;

    while(!terminado) {
        terminado = true;
        for (let i = 0; i < arrayToSort.length-1; i++) {
            if(arrayToSort[i] > (arrayToSort[i+1])) {
                terminado = false;

                display.childNodes[i].classList.toggle("active");
                await sleep(speedConstant/(SPEED*array.length));
                display.childNodes[i].classList.toggle("active");

                swap(arrayToSort, i, i+1);
            }
        }
    }
}

async function selectionSort(arrayToSort) {

    for(let i = 0; i < arrayToSort.length - 1; i++) {
        let minIndex = i;
        for(let j = i+1; j < arrayToSort.length; j++) {
            if(arrayToSort[j] < (arrayToSort[minIndex])) {
                minIndex = j;
            }
        }
        if(minIndex != i) {
            // T temp = arrayToSort[i];
            // arrayToSort[i] = arrayToSort[minIndex];
            // arrayToSort[minIndex] = temp;

            display.childNodes[minIndex].classList.toggle("active");
            await sleep(speedConstant/(SPEED*array.length));
            display.childNodes[minIndex].classList.toggle("active");

            swap(arrayToSort, i, minIndex);
        }
    }
}

async function insertionSort( arrayToSort) {

    for(let i = 0; i < arrayToSort.length; i++) {
        for(let j = i; j >= 0; j--) {
            if(j == 0) {
                break;
            }
            if(arrayToSort[j] <= (arrayToSort[j-1])) {
                // T temp = arrayToSort[j];
                // arrayToSort[j] = arrayToSort[j-1];
                // arrayToSort[j-1] = temp ; 

                display.childNodes[j].classList.toggle("active");
                await sleep(speedConstant/(SPEED*array.length));
                display.childNodes[j].classList.toggle("active");

                swap(arrayToSort, j-1, j);

            }
            else {
                break;
            }
        }
    }
}


document.querySelector(".bubbleSort").addEventListener("click", () => modifiedBubbleSort(array));

document.querySelector(".selectionSort").addEventListener("click", () => selectionSort(array));

document.querySelector(".insertionSort").addEventListener("click", () => insertionSort(array));