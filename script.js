//Data for posts
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
renderPostHTML();

// Iterates over post objects and renders HTML for posts
function renderPostHTML() {
  const postSection = POSTS.map(
    ({ post, avatar, likes, comment, location, username }, index) =>
      `  <section class="post" >
      <div class="post-header">
       <div class="header-img">
          <img class="avatar" src=${avatar} />
        </div>
        <div class="header-text">
          <span class="bold">${name}</span>
          <span>${location}</span>
        </div>
      </div>
      <div class="post-img" style="background-image: url(${post})"> 
      </div>
        <div class="post-content">
          <div class="post-icons">
            <span class="material-symbols-outlined icon heart" id="like-heart-${index}" onClick='renderLikes(${index})'> favorite </span>
            <span class="material-symbols-outlined icon"> chat_bubble </span>
            <span class="material-symbols-outlined icon"> mail </span>
          </div>
          <span class="post-likes bold" id="likes-${index}">${likes}</span> likes
          <div class="post-content"><span class="bold">${username}</span> ${comment}</div>
      </div>
    </section>`
  );

  return (mainEl.innerHTML = postSection.join(""));
}

//Sets if a post is to be liked or unliked
function likeUnlike(num, col, el, index) {
  const likeHeart = document.getElementById(`like-heart-${index}`);

  POSTS[index].likes = +el.textContent + num;
  POSTS[index].liked = !POSTS[index].liked;
  likeHeart.style.color = col;
}

//Renders likes on page
function renderLikes(postIndex) {
  const likesEl = document.getElementById(`likes-${postIndex}`);
  POSTS[postIndex].likes = likesEl.textContent;

  !POSTS[postIndex].liked
    ? likeUnlike(1, "deeppink", likesEl, postIndex)
    : likeUnlike(-1, "black", likesEl, postIndex);

  likesEl.textContent = POSTS[postIndex].likes;
}
