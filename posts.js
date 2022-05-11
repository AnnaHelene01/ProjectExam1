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
    output.innerHTML = myList;
} 

// Lage en funksjon for å hente ut 9 neste poster (i mitt tilfelle er det 3 til)
function getMore () {
  
}

