//Smart-ease - Back to the basics!

//save a note

const notes = [];

function saveNote(content, id) {
  // write some code here
  
  notes.push({ content: content , id: id  });
  
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("cook food", 3);
saveNote("clean the house", 4);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


//get a note

function getNote(id) {
    if (id >= notes.length) {
        console.log("The required ID does not exist");
        return
    }
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            console.log(notes[i]);
            return
        }    
    }  
}


getNote(4);


// Log out notes

function logOutNotesFormatted () 
{
  for(let i = 0; i < notes.length; i++) {
   
    console.log(`The note with Id : ${+notes[i].id}, has the following text:'${notes[i].content}'`);
  }  
}
logOutNotesFormatted();