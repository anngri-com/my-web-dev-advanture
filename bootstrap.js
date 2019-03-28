function loadMoviesFromServer() {
  return [
    { title: "Ghostbusters",
      image: "logo.png"
    },
    { title: "Captain Marvel",
      image: "poster2.jpg"
    },
    { title: "Shawshank Redemption",
      image: "poster3.jpg"
    },
    { title: "Sex In The City",
      image: "poster4.jpg"
    }];;
}

function addMovies() {

  var movies = loadMoviesFromServer();

  var container = document.getElementById("nowShowingSlider");

  for(var i=0; i<movies.length; i++) {
    var divLevel1 = document.createElement("div");
    divLevel1.className = "movieSliderMovie col-sm-3 col-md-2";

    var newImg = document.createElement("img");
    newImg.src = movies[i].image;

    divLevel1.appendChild(newImg);

    var p = document.createElement("p");
    var node = document.createTextNode(movies[i].title);
    p.appendChild(node);
    divLevel1.appendChild(p);

    container.appendChild(divLevel1);
  }
}