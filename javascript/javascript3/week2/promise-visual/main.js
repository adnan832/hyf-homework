// translateOneByOne

function display(selectorOneByone) {
  if (selectorOneByone === true) {

    function translateOneByOne() {
      moveElement(document.querySelector('.marks > li:nth-child(1)'), { x: 20, y: 300 })
        .then(() => {
          console.log('Red circle has been moved');
          return moveElement(document.querySelector('.marks  > li:nth-child(2)'), { x: 400, y: 300 });
        })
        .then(() => {
          console.log('Blue circle has been moved');
          return moveElement(document.querySelector('.marks > li:nth-child(3)'), { x: 400, y: 20 });
        })
        .then(() => {
          console.log('Green circle has been moved');
        })
        .catch((errorMessage) => {
          console.log(errorMessage);
        });
    }

    translateOneByOne();
  }

  //translateAllAtOnce

  else if (selectorOneByone === false) {
    function translateAllAtOnce() {
      let promiseOne = moveElement(document.querySelector('.marks > li:nth-child(1)'), { x: 20, y: 300 });
      let promiseTwo = moveElement(document.querySelector('.marks > li:nth-child(2)'), { x: 400, y: 300 });
      let promiseThree = moveElement(document.querySelector('.marks > li:nth-child(3)'), { x: 400, y: 20 });

      let myPromises = Promise.all([promiseOne, promiseTwo, promiseThree]);

      myPromises
        .then(() => {
          console.log("all items moved");
        })
        .catch(() => {
          console.log("rejection");
        })
    }
    translateAllAtOnce();
  }
}
// write true against display to ranslateOneByOne and cancel will run  translateAllAtOnce.
let selectorOneByone;
selectorOneByone = Boolean(prompt('write "true" to move OnebyOne and "cancel" for all move at the same time :'));
console.log(selectorOneByone)
display(selectorOneByone);
