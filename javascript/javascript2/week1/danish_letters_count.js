// // Find and count the Danish letters

function count(danishString) {

    let letterObj = { "total": 0, "æ": 0, "ø": 0, "å": 0 }
    console.log(danishString)
    for (let i = 0; i < danishString.length; i++) {
        if (danishString[i] in (letterObj)) {
            letterObj[danishString[i]]++;

            letterObj["total"]++;

        }

    }
    //    console.log(grab)

    return letterObj;



};
console.log(count("Jeg har en blå bil"));
console.log(count("Blå grød med røde bær"))