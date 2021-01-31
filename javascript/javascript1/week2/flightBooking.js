//First Part

function getFullname1(firstname, surname)
{
const fullName = (firstname + " " + surname);
return fullName;
}
console.log (getFullname1("Adnan" , "Aziz"));
const fullName1 = getFullname1("Abdul", "Hadi");
const fullName2 = getFullname1("Abdul" , "Manan");
console.log(fullName1);
console.log(fullName2);

//Second Part

function getFullname(firstname, surname, useFormalName) {
    if ((firstname =="" )&& (surname == ""))
        {
            return "please enter the name correctly";
        }
    else if (useFormalName === true) {
        return "Lord "+firstname+" "+surname;
    }
    else {
        return firstname+" "+surname; 
    }
} 

console.log(getFullname("Adnan", "Aziz", true));
console.log(getFullname("Adnan", "Aziz", false));