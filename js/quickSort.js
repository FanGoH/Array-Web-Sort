
async function quickSort(arrayToSort, begin, end) {

    if(begin < end) {
        const pivotIndex = quicksortArrays(arrayToSort, begin, end);
        display.childNodes[pivotIndex].classList.toggle("active");
        await sleep((speedConstant/SPEED));
        display.childNodes[pivotIndex].classList.toggle("active");

        // quicksortArrays(arrayToSort, begin, end);

        await sleep((speedConstant/SPEED)*4);
        await quickSort(arrayToSort, begin, pivotIndex);

        await sleep((speedConstant/SPEED)*8);
        await quickSort(arrayToSort, pivotIndex + 1, end);
    }
}

function quicksortArrays(arrayToSort, begin, end) {
    const pivotIndex = Math.floor((begin+end)/2);
    const pivot = arrayToSort[pivotIndex];
    begin--;
    end++;

    while(true) {
        do begin++;
        while (arrayToSort[begin] < (pivot));

        do end--;
        while (arrayToSort[end] > (pivot));

        if (begin >= end) return end;

        // T temp = arrayToSort[begin];
        // arrayToSort[begin] = arrayToSort[end];
        // arrayToSort[end] = temp;

        // display.childNodes[pivotIndex].classList.toggle("active");
        // await sleep(0);
        // display.childNodes[pivotIndex].classList.toggle("active");

        swap(array, begin, end);

    }

}




document.querySelector(".quickSort").addEventListener("click", () => {quickSort(array, 0, array.length-1)});