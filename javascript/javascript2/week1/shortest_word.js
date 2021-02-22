// Find the shortest word

function shortestWord(danishWords) {
    // const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
    let shortWord = danishWords[0].length;
    const shortarr = [];
    for (let i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length < shortWord) {
            shortWord = danishWords[i];
        }
    }
    return `The shortest word in this Array is "${shortWord}"`;
};

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
console.log(shortestWord(danishWords));