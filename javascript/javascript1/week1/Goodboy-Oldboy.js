//Goodboy-Oldboy (A dog age calculator)

var dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = humanYear * 7;
const shouldShowResultInDogYears = "true";
if 
    (shouldShowResultInDogYears === "true") 
    {
    console.log("Your dog will be " + humanYear + " human years old in " + dogYearFuture);
}
else {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
}
// End of Program