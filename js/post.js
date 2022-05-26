const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "posts.html"; }

const url = `https://www.annahelene.no/exam1/wp-json/wp/v2/posts/${id}`;

fetch(url)
.then(response => response.json())
.then(data => {
  //console.log('Success:', data);
  displayPost(data);
})
.catch((error) => {
  console.error('Error:', error);
});

const output = document.querySelector("#post");
function displayPost (data) {
  console.log(data); 
  const title = data.title.rendered;
  //const excerpt = data.excerpt.rendered;
  const excerpt = data.content.rendered;
  const link = data.link;
  getImageURL(data.featured_media);  
// Legge innholdet inn i HTML:
  let content = `
  <h1>${title}</h1>
  <div class="post-cont">
  ${excerpt}
  </div>
  `;

  output.innerHTML = content;
  document.title = title;


}

const imgg = document.querySelector(".lasse");
const getimg = document.querySelector(".img-modal");

function modal() {
  imgg.style.display="block";  
  getimg.src = this.src;
console.log(getimg);
}

// Endre tittel til hver enkelt tema:
// document.title('${title}');

//Hente ut bildene fra postene: 
function getImageURL(id) {
  fetch(`https://www.annahelene.no/exam1/wp-json/wp/v2/media/${id}`)
  .then(response => response.json())
  .then(data => {
    addImage (data.source_url);
  })
  .catch((error) => {
    console.error('Error (getImageURL):', error);
  });
}

function addImage(src) {
  console.log ("IMG: " + src);
  if (src) {
    let img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.maxwidth = 50;
    output.prepend(img);

    const imgModal = document.querySelectorAll("#post img");
imgModal.forEach(img =>{
  img.addEventListener('click', modal);
})
  }
}

