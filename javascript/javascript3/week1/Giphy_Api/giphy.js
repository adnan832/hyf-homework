// Resting the page

function sampleFunction() {
    location.reload();
}

// getting value from the UI
function getInputValue() {
    const gifName = document.getElementById("search-box").value;
    let limit = 10;
    limit = document.getElementById("gif-number").value;

    // getting data from api

    fetch(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=I8lYnqjSwMSOegwaI6CM3wXi88fVqwCR&q=&limit=${limit}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(gifData => {
            console.log(gifData);
            let gifImag = gifData.data
            gifImag.forEach(gif => {
                console.log(gif.url);
                const image = document.createElement("img");
                image.src = gif.images.fixed_height.url;
                document.body.appendChild(image);

            });
        });
}