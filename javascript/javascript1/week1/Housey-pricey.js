//Housey-pricey (A house price estimator)

let volumeInMeters = [8*10*10, 5*11*8];
let gardenSizeInM2 = [100, 70];
let houseCost = [2500000, 1000000];
let housePrice = [volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300, volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300];

if (housePrice < houseCost[0]) {
    console.log("Peter's house is too expensive.");
}
else {
    console.log("Peter's house price looks reasonable.");
}
if (housePrice < houseCost[1]) {
    console.log("Julia's house is too expensive.");
}
else {
    console.log("Julia's house price looks reasonable.");
}