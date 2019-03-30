function loadMoviesFromServer() {
  return [
    { title: "Isn't it Romantic",
      image: "Romantic.png"
    },
    { title: "Alita",
      image: "Alita.png"
    },
    { title: "Captain Marvel",
      image: "captainMarvel.png"
    },
    { title: "What Men Want",
      image: "WhatMenWant.png"
    }];;
}

function addMovies() {
  var moviesArray = loadMoviesFromServer();

  for(var i=0; i<moviesArray.length; i++) {
    addOneMovieHtml(moviesArray[i]);
  }
}

function addOneMovieHtml(movie) {
  var container = document.getElementById("nowShowingSlider");

  var divLevel1 = document.createElement("div");
  divLevel1.className = "col-sm-3";

  var newImg = document.createElement("img");
  newImg.src = movie.image;
  newImg.className = "img-fluid. max-width: 100%;";

  divLevel1.appendChild(newImg);
  container.appendChild(divLevel1);

  var divLevel2 = document.createElement("div");
  divLevel2.className = "col-sm-3";

  var p = document.createElement("p");
  p.className = "h4";
  var node = document.createTextNode(movie.title);
  p.appendChild(node);
  divLevel2.appendChild(p);

  var titleDiv = document.getElementById("textMovieTitle");
  titleDiv.appendChild(divLevel2);

}
