// Sette inn dato som endrer seg aktivt!
var months = [ //sette inn månedene
    'Januar',
    'Februar',
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember'
], d, m, y, now, out_string; //vars til å holde dato, måned, år, dato object og output string
now = new Date(); //new date object
d = now.getDate(); //nåværende dato
m = now.getMonth(); // nåværende dato
y = now.getFullYear(); //nåværende dato


out_string = months[m] + ' ' + d + ' , ' + y; //concat dato delene til output stringen

document.getElementById('date').innerHTML = out_string; //sette html of the hmtl element to the output string


// SLIDER ->
const url = "https://www.annahelene.no/exam1/wp-json/wp/v2/posts?_embed&per_page=12"; //henter ut spesifikt 9 poster etter eget valg
//const url = "https://www.annahelene.no/exam1/wp-json/wp/v2/posts?_embed&per_page=9&page=2";

fetch(url)
.then(response => response.json())
.then(data => {
  //console.log('Success:', data);
  listPosts(data);
})
.catch((error) => {
  console.error('Error:', error);
});

const output = document.querySelector(".slider");
function listPosts (posts) {
    let myList = "";
    for (let post of posts) {
        console.log(post);
        myList += `
        <div class="slider-post">
           <div class="posts-img"> 
              <a href="post.html?id=${post.id}"> 
              <img src="${post._embedded['wp:featuredmedia'][0].source_url}" class="img-posts-size">
              </a>
           </div>
           <a href="post.html?id=${post.id}">
           ${post.title.rendered}
           </a>
        </div>`;
    }
    output.innerHTML = myList;
} 

// slider funksjon
const next = document.getElementById("slider-right");
const back = document.getElementById("slider-left");
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-post");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}