
document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('SearchMovie');

    inputElement.addEventListener('keydown', function (event) {
    // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            buttonClicked();
        }
    });
});

function buttonClicked(){
    var imdbid = document.getElementById("SearchMovie").value;
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=${imdbid}`)
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data)
        document.getElementById("Poster").src = data.Poster
    })
    window.location.href = `search-results.html?query=${encodeURIComponent(imdbid)}`;
}

function redirectToMovieDetail(title) {
    window.location.href = `info page.html?title=${title}`;
}


topPicks();
popularMovies();
actionMovies();
topPicksShows();
popularMoviesShows();
actionMoviesShows();

function fetchAndRenderMovie(url, posterId, titleId) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {   
            console.log(data);
            document.getElementById(posterId).src = data.Poster;
            document.getElementById(titleId).innerHTML = data.Title;
        });
}

function topPicks() {
    // Top Picks
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=My Name is Loh Kiwan`, "Poster1", "Title1");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Hacker Wars`, "Poster2", "Title2");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Deep House`, "Poster3", "Title3");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Forgotten Battle`, "Poster4", "Title4");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Girl with the Dragon Tattoo`, "Poster5", "Title5");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Wall`, "Poster6", "Title6");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Deepwater Horizon`, "Poster7", "Title7");
}

function popularMovies() {
    // Popular Movies
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Imaginur`, "Poster11", "Title11");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Spaceman`, "Poster22", "Title22");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Thanksgiving`, "Poster33", "Title33");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Last Airbender`, "Poster44", "Title44");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Oppenheimer`, "Poster55", "Title55");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=KKN di Desa Penari`, "Poster66", "Title66");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Wonka`, "Poster77", "Title77");
}

function actionMovies() {
    // Popular Movies
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=American Assassin`, "Poster112", "Title112");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Umbrella Academy`, "Poster113", "Title113");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Greyhound`, "Poster114", "Title114");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Hunter Killer`, "Poster115", "Title115");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=American Sniper`, "Poster116", "Title116");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Contractor`, "Poster117", "Title117");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Extraction`, "Poster118", "Title118");
}

function topPicksShows() {
    // Top Picks
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Boys`, "Poster111", "Title111");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Umbrella Academy`, "Poster222", "Title222");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Destined With You`, "Poster333", "Title333");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Extracurricular`, "Poster444", "Title444");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Silo`, "Poster555", "Title555");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Twenty-Five Twenty-One`, "Poster666", "Title666");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=18 Again`, "Poster777", "Title777");
}

function popularMoviesShows() {
    // Popular Movies
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=True Beauty`, "Poster12", "Title12");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=All of Us Are Dead`, "Poster13", "Title13");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Flash`, "Poster14", "Title14");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Squid Game`, "Poster15", "Title15");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Avatar: The Last Airbender`, "Poster16", "Title16");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Vincenzo`, "Poster17", "Title17");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Alice in Borderland`, "Poster18", "Title18");
}

function actionMoviesShows() {
    // Popular Movies
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Bloodhounds`, "Poster21", "Title21");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Vagabond`, "Poster23", "Title23");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Vincenzo`, "Poster24", "Title24");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Memories of the Alhambra`, "Poster25", "Title25");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Uncanny Counter`, "Poster26", "Title26");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=Squid Game`, "Poster27", "Title27");
    fetchAndRenderMovie(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Terminal List`, "Poster28", "Title28");
}