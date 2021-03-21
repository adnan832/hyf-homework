
// Movies exercise
async function fetchMovies() {

    const movies = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
    const getData = await fetch(movies);
    const names = await getData.json();
    const badMovies = names.filter(item => item.rating < 5);
    console.log(badMovies);
    const badMoviesSince2000 = badMovies.filter(item => item.year >= 2000);
    console.log(badMoviesSince2000);
}
fetchMovies();

//Promise that resolves after set time 

async function makeUpYourOwnFunctionNameFnc(resolvAfterSec) {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, resolvAfterSec * 1000);
    })
        .then(() => console.log('I am called asynchronously after 8 seconds'))
    await promise;
}

console.log(makeUpYourOwnFunctionNameFnc(8))

// Rewrite time

function setTimeoutPromise(setTime) {
    const setTimePromise = new Promise(resolve => {
        setTimeout(resolve, setTime)
    })
    return setTimePromise;
}
setTimeoutPromise(3000)
    .then(() => console.log('called after 3 seconds'))


function getCurrentLocation() {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    return promise;
}
getCurrentLocation()
    .then(position => {
        const lati =position.coords.latitude
        const longi  =position.coords.longitude 
        console.log(position);
        console.log('My latitude is  '+lati);
        console.log('My longitude is '+longi);
      })
    .catch(error => console.log(error))

    //Fetching and waiting

    // using by promises
    let promise = new Promise((resolve) => {
        setTimeout(() =>{
const api = fetch ("https://dog.ceo/api/breeds/image/random")
.then (api => api.json())
.then (image => console.log(image))
resolve("The promise is executed in 3 Seconds")
}, 3000);
})
promise.then(text => console.log(text))

// using by Async/await

async function delayFunction() {
    try {
      const getApi = await fetch("http://api.open-notify.org/astros.json")
      const getInfo = await getApi.json()
      setTimeout(() => {
        console.log(getInfo);
      }, 3000);
    } catch { console.error('Desired Api is Incorrrect'); }
  }
  delayFunction()

  


