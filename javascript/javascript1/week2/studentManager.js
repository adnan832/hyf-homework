const class07Students = [];
function addStudentToClass(studentName) 
{    
    if (typeof(studentName) == "string")
   
 {        
    if (studentName == "Queen" || class07Students.length < 6) 
    {
        return class07Students.push(studentName);    
        } 
        
        
        else if (class07Students.includes(studentName)) {
        console.log(`The Student ${studentName} cannot be added, no duplication allowed`);
        return;
        }
        
         else if (studentName == "" ) 
         { 
        console.log("Enter student name");
        return;
        
        }
        
         else if (class07Students.length < 6 ) {            
       return class07Students.push(studentName);        
        }
        else {
            console.log ("You cannot add further students in the class07.");
            return;
        }        
        
 }
    else {
        console.log("Student name should be a string.")
    return;
    }
}

function getNumberOfStudents() {

return class07Students.length;

}

// checking by adding name but for code pin these names should be committed

// addStudentToClass("");
addStudentToClass("Adnan");
addStudentToClass("Amjad");
addStudentToClass("Majid");
addStudentToClass("Faisal");
addStudentToClass("Yasir");
addStudentToClass("Faheem");
addStudentToClass("Queen");
// addStudentToClass("Faheem");
// addStudentToClass("Tariq");


console.log("There are " +getNumberOfStudents() + " students in the class");

console.log(class07Students);