const POSTS = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    (post) =>
      `  <section class="post" >
      <div class="post-header">
      <img class="avatar" src=${post.avatar} /> ${post.name} ${post.location}
      </div>
      <div class="post-img" style="background-image: url(${post.post})"> 
      </div>
      <div class="post-icons">
        <span class="material-symbols-outlined"  onClick='incrementLikes(${JSON.stringify(
          post
        )})'> favorite </span>
        <span class="material-symbols-outlined"> chat_bubble </span>
        <span class="material-symbols-outlined"> mail </span>
      </div>
      <div class="post-likes" id="${post.id}">${post.likes}</div>
      <div class="post-content">${post.comment}</div>
    </section>`
  );

  return postSection;
}

function renderPosts() {
  mainEl.innerHTML = renderPostHTML().join("");
}

function incrementLikes(post) {
  const likesEl = document.getElementById(post.id);
  if (!post.liked) {
    post.likes++;
    post.liked = true;
    likesEl.textContent = post.likes;
    // likesEl.textContent = post.likes
  } else {
    post.likes--;
    post.liked = false;
    likesEl.textContent = post.likes;
  }
 
  console.log(post.liked);
}
renderPosts();

// console.log(postSection)
// function incrementLikes(post) {
//   // if (!post.liked) {
//   //   post.likes++;
//   //   post.liked = false;
//   // }
//   console.log(post.name);
// }
// const likeEl = document.getElementById(`like-${index}`)
