document
  .getElementById("new-post-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    if (!title || !content) {
      alert("Both title and content must be filled out.");
      return;
    }

    var post = document.createElement("div");
    post.classList.add("post");

    var postTitle = document.createElement("h3");
    postTitle.innerText = title;

    var postContent = document.createElement("p");
    postContent.innerText = content;

    var postDate = document.createElement("p");
    postDate.innerText = new Date().toLocaleDateString();
    postDate.classList.add("date");

    // EXTRA CHALLENGE ==========================
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function (e) {
      post.remove();
    });

    var likes = 0;

    var likeButton = document.createElement("button");
    likeButton.innerText = "Like";

    var likeCount = document.createElement("span");
    likeCount.innerText = " 0 likes";

    likeButton.addEventListener("click", function (e) {
      likes++;
      likeCount.innerText = ` ${likes} like${likes !== 1 ? "s" : ""}`;
    });
    // ======================================

    post.appendChild(postTitle);
    post.appendChild(postContent);
    post.appendChild(postDate);
    // Extra challenge=======
    post.appendChild(deleteButton);
    post.appendChild(likeButton);
    post.appendChild(likeCount);
    // ==============

    var posts = document.getElementById("posts");
    posts.insertBefore(post, posts.firstChild);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  });
