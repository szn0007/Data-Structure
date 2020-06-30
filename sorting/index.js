// Implement a swap helper function that we will use in both BS and SS
const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

//bubbleSort works by having sorted data accumulate at end of array
const bubbleSort = (arr) => {
  for (let j = 0; j < arr.length; j ++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
      }
    }
  }
  return arr
}

// Time Complexity => O(N ^2)

//selectionSort works by having sorted data accumulate at start of array
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapIndex = i
    for (let j = i + 1; j < arr.length; j ++) {
      let currNumber = arr[j]
      if (currNumber < arr[swapIndex]) {
        swapIndex = j
      }
    }
    swap(arr, i, swapIndex)
  }
  return arr
}

// Time Complexity => O(N ^2)

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("swap()", () => {
  it("swaps values in an array when provided with 2 indexes.", () => {
    const arr = [13, 2, 4];
    swap(arr, 0, 1);
    assert.deepEqual(arr, [2, 13, 4]);
  });
});

describe("Bubble Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("Selection Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(selectionSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5]);
  });
});

mocha.run();
