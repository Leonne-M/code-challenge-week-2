// Your code here
allMovies=[]

function getMovies(){
const requestOptions = {
method: "GET",
redirect: "follow"
};
fetch("http://localhost:3000/films", requestOptions)
.then((response) => response.json())
.then((result) => {
//console.log(result);
allMovies=result;
Listmovies(result);
})
.catch((error) => console.error(error));
}
function Listmovies(movies){
const movieList=document.getElementById("films");
let html="";

for(let i=0;i<movies.length;i++){
let movie=movies[i];
html=html +`<li class="film item"onclick= "clickedMovie(${i})">${movie.title}</li>`;
}
movieList.innerHTML=html

}
getMovies()

function clickedMovie(id){
console.log("Clicked movie is", id);
console.log(allMovies[id]);
let poster=document.getElementById("poster");
let clickedMovie=allMovies[id]
poster.src=clickedMovie.poster;
poster.alt=clickedMovie.title
movieInfo(clickedMovie.id)
}
function movieInfo(id){
const movieTitle=document.getElementById("title")
const runtime=document.getElementById("runtime")
const info=document.getElementById("film-info")
const showtime=document.getElementById("showtime")
const ticket=document.getElementById("ticket-num")


const requestOptions = {
method: "GET",
redirect: "follow"
};
fetch(`http://localhost:3000/films/${id}`, requestOptions)
.then((response) => response.json())
.then((result) => {
console.log(result);
movieTitle.innerText=result.title;
runtime.innerText=`${result.runtime}minutes`;
info.innerText=result.description;
showtime.innertext=result.showtime;
ticket.innerText=`remaining tickets ${result.capacity}`;


btn.addEventListener("click",function (){
console.log("buy ticket")
console.log(result);
})

})
.catch((error) => console.error(error));

}