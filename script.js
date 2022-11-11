const POSTS = [
  {
    name: "Magnus T. Boxer",
    username: "magdog2020",
    location: "Palo Alto, CA",
    avatar: "img/magnus-icon.PNG",
    post: "img/magnus-walk.jpeg",
    comment: "Exploring with my family!",
    likes: 871,
    liked: false,
  },
  {
    name: "Magnus T. Boxer",
    username: "magdog2020",
    location: "California, USA",
    avatar: "img/magnus-icon.PNG",
    post: "img/magnus-table.jpeg",
    comment: "Surveying my domain",
    likes: 1008,
    liked: false,
  },
  {
    name: "Magnus T. Boxer",
    username: "magdog2020",
    location: "California, USA",
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
       <div class="header-img">
          <img class="avatar" src=${post.avatar} />
        </div>
        <div class="header-text">
          <span class="bold">${post.name}</span>
          <span>${post.location}</span>
        </div>
      </div>
      <div class="post-img" style="background-image: url(${post.post})"> 
      </div>
        <div class="post-content">
          <div class="post-icons">
            <span class="material-symbols-outlined icon heart" id="like-heart-${index}" onClick='renderLikes(${JSON.stringify(
        index
      )})'> favorite </span>
            <span class="material-symbols-outlined icon"> chat_bubble </span>
            <span class="material-symbols-outlined icon"> mail </span>
          </div>
          <span class="post-likes bold" id="likes-${index}">${
        post.likes
      }</span> likes
          <div class="post-content"><span class="bold">${
            post.username
          }</span> ${post.comment}</div>
      </div>
    </section>`
  );

  return postSection;
}

function renderPosts() {
  mainEl.innerHTML = renderPostHTML().join("");
}

function likeUnlike(num, col, bool, el, index) {
  const likeHeart = document.getElementById(`like-heart-${index}`);

  POSTS[index].likes = parseInt(el.textContent);
  POSTS[index].likes += num;
  POSTS[index].liked = bool;
  likeHeart.style.color = col;
}

function renderLikes(postIndex) {
  const likesEl = document.getElementById(`likes-${postIndex}`);
   POSTS[postIndex].likes = likesEl.textContent;

  !POSTS[postIndex].liked
    ? likeUnlike(1, "deeppink", true, likesEl, postIndex)
    : likeUnlike(-1, "black", false, likesEl, postIndex);

  likesEl.textContent = POSTS[postIndex].likes;
}

renderPosts();
