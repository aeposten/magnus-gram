const POSTS = [
  {
    name: "Magnus T. Boxer",
    username: "magdog2020",
    location: "Baylands Nature Preserve Palo Alto, CA",
    avatar: "img/magnus-icon.PNG",
    post: "img/magnus-walk.jpeg",
    comment: "Exploring with my family!",
    likes: 871,
  },
  {
    name: "Magnus T. Boxer",
    username: "magdog2020",
    location: "Home California, USA",
    avatar: "img/magnus-icon.PNG",
    post: "img/magnus-table.jpeg",
    comment: "Surveying my domain",
    likes: 1008,
  },
  {
    name: "Magnus T. Boxer",
    username: "magdog2020",
    location: "Home California, USA",
    avatar: "img/magnus-icon.PNG",
    post: "img/magnus-birthday.jpeg",
    comment: "Celebrating my best pal's birthday",
    likes: 20000,
  },
];

const mainEl = document.getElementById("main");

function renderPosts() {
  const postSection = POSTS.map(
    (post) =>
      `  <section class="post">
      <div class="post-header">
      <img class="avatar" src=${post.avatar} /> ${post.name} ${post.location}
      </div>
      <div class="post-img" style="background-image: url(${post.post})"> 
      </div>
      <div class="post-icons">
        <span class="material-symbols-outlined"> favorite </span>
        <span class="material-symbols-outlined"> chat_bubble </span>
        <span class="material-symbols-outlined"> mail </span>
      </div>
      <div class="post-likes">${post.likes}</div>
      <div class="post-content">${post.comment}</div>
    </section>`
  ).join("");

  mainEl.innerHTML = postSection;
}

renderPosts();
