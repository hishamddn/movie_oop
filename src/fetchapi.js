function buttonClicked(){
    var imdbid = document.getElementById("SearchData").value;
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=${imdbid}`)
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data)
        document.getElementById("Title").innerHTML = data.Title
        document.getElementById("Year").innerHTML = data.Year
        document.getElementById("Genre").innerHTML = data.Genre
        document.getElementById("Director").innerHTML = data.Director
        document.getElementById("Actors").innerHTML = data.Actors
        document.getElementById("Plot").innerHTML = data.Plot
        document.getElementById("Poster").src = data.Poster
        document.getElementById("Ratings").innerHTML = data.Ratings
        document.getElementById("Awards").innerHTML = data.Awards
        document.getElementById("Genre").innerHTML = data.Genre
        document.getElementById("Writer").innerHTML = data.Writer

        //this is for display ratings
        const ratingsElement = document.getElementById("Ratings");
        ratingsElement.innerHTML = "Ratings: ";
        data.Ratings.forEach(rating => {
            ratingsElement.innerHTML += `${rating.Source}: ${rating.Value}, `;
        });
        ratingsElement.innerHTML = ratingsElement.innerHTML.slice(0, -2);

        

    })
}