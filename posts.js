const url = "https://www.annahelene.no/exam1/wp-json/wp/v2/posts?_embed";

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
              <img src="${post._embedded['wp:featuredmedia'][0].source_url}">
              </a>
           </div>
           <a href="post.html?id=${post.id}">
           ${post.title.rendered}
           </a>
        </div>`;
    }
    output.innerHTML = myList;
} 

// <img src="${post._embedded['wp:featuredmedia'][0].source_url}">

//FÅ INN DATO
const date = new Date();
date.setHours(0, 0, 0, 0)