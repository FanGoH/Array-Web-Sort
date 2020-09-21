  
// Merge Sort Implentation (Recursion)
async function mergeSort (unsortedArray, start) {
    start = start == undefined ? 0 : start;
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);



    return await merge(
        await mergeSort(left, start), await mergeSort(right, middle + start), start
    );
}

async function merge (left, right, start) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; 
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; 
    }
  }

  let b = [].concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))

   resultArray = resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));



  for (let i = 0; i < resultArray.length; i++) {
    const hei = 5*resultArray[i];
    display.childNodes[start + i].classList.toggle("active");
    await sleep(speedConstant/SPEED);
    display.childNodes[start + i].classList.toggle("active");
    display.childNodes[start + i].style.height = `${hei}px`; 
  }

  return resultArray
}



const updateValues = () => {
    let bars = display.childNodes

    for(let i = 0; i < bars.length; i++) {
        const hei = 5*array[i];
        bars[i].style.height = `${hei}px`;
    }

}

const updateDisplayMerge = () => {

    array = mergeSort(array, 0);
    updateValues();

}


// array = [5, 20, 10, 15];
// fillDisplay();

document.querySelector(".mergeSort").addEventListener("click", () => {
    updateDisplayMerge();
});
