const url = "https://www.annahelene.no/exam1/wp-json/wp/v2/posts?_embed&per_page=9"; //henter ut spesifikt 9 poster etter eget valg
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

const output = document.querySelector(".list");
function listPosts (posts) {
    let myList = "";
    for (let post of posts) {
        console.log(post);
        let altTxt = post._embedded["wp:featuredmedia"][0].alt_text;
        myList += `
        <div>
           <div class="posts-img"> 
              <a href="post.html?id=${post.id}"> 
              <img src="${post._embedded['wp:featuredmedia'][0].source_url}" class="img-posts-size" alt="${altTxt}">
              </a>
           </div>
           <a href="post.html?id=${post.id}">
           ${post.title.rendered}
           </a>
        </div>`;
    }
    output.innerHTML = myList;
} 


function getMore() {
  const url = "https://www.annahelene.no/exam1/wp-json/wp/v2/posts?_embed&per_page=9&page=2"; //henter ut spesifikt 9 poster etter eget valg
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

const knapp = document.getElementById("loadMore");
const output = document.querySelector(".list");
function listPosts (posts) {
    let myList = "";
    for (let post of posts) {
        console.log(post);
        myList += `
        <div>
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
    output.innerHTML += myList;
    // Setter display: none , etter knappen er klikket på da det ikke er mer enn page 2!
    //console.log ("KNAPP: ", knapp); 
    knapp.style.display="none";
   } 

// En annen måte å fjerne knappen på:
  //  let knapp = document.getElementById("loadMore")
  //  knapp.style.display="none";
}





