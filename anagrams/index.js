// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

const anagrams = (stringA, stringB) => {
  const sanitizedA = stringA.replace(/[^a-z0-9]+/gi, '').toLowerCase()
  const sanitizedB = stringB.replace(/[^a-z0-9]+/gi, '').toLowerCase()

  const charObj = (str) => {
    let obj = {}
    for (char of str) {
      !obj[char] ? obj[char] = 1: obj[char] ++
    }
    return obj
  }
  
  if (sanitizedA === sanitizedB) {
    return true
  } else {
    if (sanitizedA.length !== sanitizedB.length) {
      return false
    } else {
      const objA = charObj(sanitizedA)
      const objB = charObj(sanitizedB)

      for (i in objA) {
        if (objA[i] === objB[i]) {
          return true
        } else {
          return false
        }
      }
    }
  }
}

// Time Complexity => O(N+M)
// Space Complexity => O(1)

const anagram = (stringA, stringB) => {
  const sanitizedA = stringA.toLowerCase().replace(/[a-z0-9]/gi, '')
  const sanitizedB = stringB.toLowerCase().replace(/[a-z0-9]/gi, '')

  const sortedSanitizedA = sanitizedA.split('').sort().join('')
  const sortedSanitizedB = sanitizedB.split('').sort().join('')

  // if (sortedSanitizedA === sortedSanitizedB) {
  //   return true
  // } else {
  //   return false
  // }
  return sortedSanitizedA === sortedSanitizedB
}

// Time Complexity => O(nlogn)
// Space Complexity => O(N)

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

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});

mocha.run();
