let numArry = [23, 2, 5, 6, 66, 9, 8, 44, 51, 3, 8, 7, 8, 9, 10, 166];


// 1.	Implement binary search


function binarySearch(array, num) {
    array = array.sort((a, b) => a - b);

    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === num) {
            console.log("Znaleziono liczbę: " + num);
            return;
        } else if (array[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    console.log("Nie znaleziono liczby: " + num);
}

binarySearch(numArry, 5);



// 2.	Implement selection sort

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }

console.log(selectionSort(numArry))

// 3.	Implement merge sort

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const merge = (left, right) => {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    };

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(numArry))