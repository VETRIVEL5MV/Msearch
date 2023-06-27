let movienameref=document.getElementById("Movies");
let searchBtn=document.getElementById("Search");
let getMovie = () => {
    let movieName = movienameref.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
      if (movieName.length <= 0) {
      result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
    }
        else {
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => {
            //If movie exists in database
            if (data.Response == "True") {
              result.innerHTML = `
                <div class="info">
                     <div>
                        <h2>${data.Title}</h2>
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>${data.Genre.split(",").join("</div><div>")}</div>
                        </div>
                    </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                            
            `;
            }
            else {
                result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
              }
            })