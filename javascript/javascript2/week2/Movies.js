
const shortTitle = movies.filter(movieWithShortTitle => movieWithShortTitle.title.length <= 4);
console.log(shortTitle);

//movies with long titles

const longTitle = movies.filter(movieWithLongTitle => movieWithLongTitle.title.length >= 20 );   
console.log(longTitle);

//movies made between 1980-1989

const moviesYear = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989 ); 
console.log(moviesYear);

// creating new array with a key called tag  Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const movieTags = movies.map(function(movie) {
    if (movie.rating >= 7) {
      movie.tag = "Good";
      return movie;
    }
    else if (movie.rating >= 4) {
      movie.tag = "Average";
      return movie
    }
    else {
      movie.tag = "Bad";
      return movie;
    }
});
console.log(movieTags);        


// 5. the movies rated higher than 6.

const highRatedmovies = movies
            .filter(highRating => highRating.rating > 6)
            .map(onlyRating => onlyRating.rating)
console.log(highRatedmovies);

//6. search the keywords, Surfer, Alien or Benjamin

const moviesWithKeyWords = movies.filter(movie => 
    movie.title.includes('Surfer') ||
    movie.title.includes('Alien') ||
    movie.title.includes('Benjamin') ||
    movie.title.includes('gai') 
   );
console.log(moviesWithKeyWords.length) //26

// 7. array of movies with duplicated titles.

const duplicatedTitles = [];
movies
    .map(movie => movie.title.split(' '))
    .forEach(title => title.filter((word, index) => {
        if(title.indexOf(word) != index){
            duplicatedTitles.push(title.join(' '))
        }         
    }));

console.log(duplicatedTitles);

//8. Calculate the average rating of all the movies using reduce
let result = movies.reduce(function (sum, movie) {
    return sum + movie.rating;
}, 0);
let avgRating = result / movies.length;
console.log(avgRating);