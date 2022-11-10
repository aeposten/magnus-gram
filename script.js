const POSTS = [
  {
    name: "Magnus T. Boxer",
    username: "magdog2020",
    location: "Baylands Nature Preserve Palo Alto, CA",
    avatar: "img/magnus-icon.PNG",
    post: "img/magnus-walk.jpeg",
    comment: "Exploring with my family!",
    likes: 871,
    liked: false,
  },
  {
    name: "Magnus T. Boxer",
    username: "magdog2020",
    location: "Home California, USA",
    avatar: "img/magnus-icon.PNG",
    post: "img/magnus-table.jpeg",
    comment: "Surveying my domain",
    likes: 1008,
    liked: false,
  },
  {
    name: "Magnus T. Boxer",
    username: "magdog2020",
    location: "Home California, USA",
    avatar: "img/magnus-icon.PNG",
    post: "img/magnus-birthday.jpeg",
    comment: "Celebrating my best pal's birthday",
    likes: 20000,
    liked: false,
  },
];

const mainEl = document.getElementById("main");

function renderPostHTML() {
  const postSection = POSTS.map(
    (post, index) =>
      `  <section class="post" >
      <div class="post-header">
      <img class="avatar" src=${post.avatar} /> ${post.name} ${post.location}
      </div>
      <div class="post-img" style="background-image: url(${post.post})"> 
      </div>
      <div class="post-icons">
        <span class="material-symbols-outlined"  onClick='incrementLikes(${JSON.stringify(
          index
        )})'> favorite </span>
        <span class="material-symbols-outlined"> chat_bubble </span>
        <span class="material-symbols-outlined"> mail </span>
      </div>
      <div class="post-likes" id="likes-${index}">${post.likes}</div>
      <div class="post-content">${post.comment}</div>
    </section>`
  );

  return postSection;
}

function renderPosts() {
  mainEl.innerHTML = renderPostHTML().join("");
}

function incrementLikes(postIndex) {
  const likesEl = document.getElementById(`likes-${postIndex}`);
  POSTS[postIndex].likes = likesEl.textContent;

  if (!POSTS[postIndex].liked) {
    POSTS[postIndex].likes = parseInt(likesEl.textContent);
    POSTS[postIndex].likes += 1;
    POSTS[postIndex].liked = true;
  } else {
    POSTS[postIndex].likes = parseInt(likesEl.textContent);
    POSTS[postIndex].likes -= 1;
    POSTS[postIndex].liked = false;
  }
  likesEl.textContent = POSTS[postIndex].likes;
}

renderPosts();
