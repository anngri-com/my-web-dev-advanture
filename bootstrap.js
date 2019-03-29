function loadMoviesFromServer() {
  return [
    { title: "Ghostbusters",
      image: "Romantic.png"
    },
    { title: "Captain Marvel",
      image: "Alita.png"
    },
    { title: "Shawshank Redemption",
      image: "captainMarvel.png"
    },
    { title: "Sex In The City",
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
  divLevel1.className = "col-xs-3";

  var newImg = document.createElement("img");
  newImg.src = movie.image;
  newImg.className = "img-responsive";

  divLevel1.appendChild(newImg);

  var p = document.createElement("p");
  var node = document.createTextNode(movie.title);
  p.appendChild(node);
  divLevel1.appendChild(p);

  container.appendChild(divLevel1);
}