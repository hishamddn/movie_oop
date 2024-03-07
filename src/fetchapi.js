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

const urlParams = new URLSearchParams(window.location.search);
const movieTitle = urlParams.get('title');
const movieId = urlParams.get('movieId');

if (movieTitle) {
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=${movieTitle}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            updateUI(data);
        });
} else if (movieId) {
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&i=${movieId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            updateUI(data);
        });
} else {
    console.error('No movie title or ID provided in the URL.');
}

function updateUI(data) {
    document.getElementById("Title").innerHTML = data.Title;
    document.getElementById("Year").innerHTML = data.Year;
    document.getElementById("Genre").innerHTML = data.Genre;
    document.getElementById("Director").innerHTML = data.Director;
    document.getElementById("Actors").innerHTML = data.Actors;
    document.getElementById("Plot").innerHTML = data.Plot;
    document.getElementById("Poster").src = data.Poster;
    document.getElementById("Ratings").innerHTML = displayRatings(data.Ratings);
    document.getElementById("Awards").innerHTML = data.Awards;
    document.getElementById("Writer").innerHTML = data.Writer;
}
function displayRatings(ratings) {
    return ratings.map(rating => `${rating.Source}: ${rating.Value}`).join(', ');
}



/*
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
*/


function clearForm() {
    // Clear the input values
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").selectedIndex = 0; // Reset the select
    document.getElementById("subject").value = "";

    // Remove the "value" attribute from the inputs and "selected" attribute from the select
    document.getElementById("name").removeAttribute("value");
    document.getElementById("email").removeAttribute("value");
    document.getElementById("gender").removeAttribute("selected");
    document.getElementById("subject").removeAttribute("value");
}

function validateForm(){
    var email = document.getElementById("email").value;

    if(!email.includes("@")){
        alert("Invalid email address");
        return false
    }
    return true
}

document.addEventListener('DOMContentLoaded', function () {
    showdata();
});
function showdata(){
    var reviewlist;
    if(localStorage.getItem('reviewlist') == null){
        reviewlist = []
    }
    else{
        reviewlist = JSON.parse(localStorage.getItem('reviewlist'))
    }

    var html = "";
    reviewlist.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.subject + "</td>";
        html += "<td><button onclick = 'deleteData("+ index +")'>Delete</button><button onclick = 'updateData("+ index +")'>Edit</button></td>";
        html += "</tr>"
    });

    document.querySelector("#crudtable tbody").innerHTML = html;
}


function addData(){
    if(validateForm() == true){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var gender = document.getElementById("gender").value;
        var subject = document.getElementById("subject").value;

        var reviewlist;
        if(localStorage.getItem('reviewlist') == null){
            reviewlist = []
        }
        else{
            reviewlist = JSON.parse(localStorage.getItem('reviewlist'))
        }

        reviewlist.push({
            name: name,
            email: email,
            gender: gender,
            subject: subject,
        });

        localStorage.setItem("reviewlist", JSON.stringify(reviewlist));

        showNotification("Review has been submitted!", 3000);
        showdata()

        var name = document.getElementById("name").value = "";
        var email = document.getElementById("email").value = "";
        var gender = document.getElementById("gender").value = "";
        var subject = document.getElementById("subject").value = "";

    }
}
function showNotification(message, duration) {
    var notificationElement = document.getElementById('notification');
    notificationElement.innerHTML = message;
    notificationElement.style.display = 'block';

    // Triggering a reflow to enable the transition
    void notificationElement.offsetWidth;

    notificationElement.style.opacity = 1;

    setTimeout(function () {
        notificationElement.style.opacity = 0;
        setTimeout(function () {
            notificationElement.style.display = 'none';
        }, 3000); // Adjust this time to match the transition duration
    }, duration);
}

function deleteData(index){
    var reviewlist;
    if(localStorage.getItem('reviewlist') == null){
        reviewlist = []
    }
    else{
        reviewlist = JSON.parse(localStorage.getItem('reviewlist'))
    }

    reviewlist.splice(index, 1);
    localStorage.setItem("reviewlist", JSON.stringify(reviewlist));

    showNotification("Review has been deleted!", 3000);
    showdata();
}

function updateData(index){
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";
    document.getElementById("clearBtn").style.display = "none";

    var reviewlist;
    if(localStorage.getItem('reviewlist') == null){
        reviewlist = []
    }
    else{
        reviewlist = JSON.parse(localStorage.getItem('reviewlist'))
    }

    document.getElementById("name").value = reviewlist[index].name;
    document.getElementById("email").value = reviewlist[index].email;
    document.getElementById("gender").value = reviewlist[index].gender;
    document.getElementById("subject").value = reviewlist[index].subject;

    document.querySelector('#Update').onclick = function(){
        if(validateForm() == true){
            reviewlist[index].name =  document.getElementById("name").value
            reviewlist[index].email =  document.getElementById("email").value
            reviewlist[index].gender =  document.getElementById("gender").value
            reviewlist[index].subject =  document.getElementById("subject").value

            localStorage.setItem("reviewlist", JSON.stringify(reviewlist));
            showdata()

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("gender").value = "";
            document.getElementById("subject").value = "";

            document.getElementById("Submit").style.display = "inline";
            document.getElementById("Update").style.display = "none";
            document.getElementById("clearBtn").style.display = "inline";
            showNotification("Review has been updated!", 3000);
        }
    }
}



