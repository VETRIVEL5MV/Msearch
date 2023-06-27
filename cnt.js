function searchMovie() {
const baseUrl = "https://www.omdbapi.com/";
const apiKey = "59f48ee4"; 
 url = new URL(baseUrl);
 url.searchParams.append("apikey", apiKey); 
 url.searchParams.append("t",title="Avengers"); 
 fetch(url) .then(response => response.json()) 
 .then(data => { if (data.Response === "True")  {
    document.getElementById("md1").innerHTML = ("Title:" + data.Title); 
    document.getElementById("md2").innerHTML = ("Year:"+ data.Year); 
    document.getElementById("md3").innerHTML = ("Genre:"+ data.Genre); 
    // console.log("Title:", data.Title); 
    //console.log("Year:", data.Year); 
   // console.log("Genre:", data.Genre); }
 }
   else  { 
    console.log("Movie not found!"); } }) 
    .catch(error => { console.error("Error:", error); }); 
} 