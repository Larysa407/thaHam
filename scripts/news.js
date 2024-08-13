function showImg() {
    const images = document.querySelectorAll(`.post__img`);
  
    images.forEach((image) => {
      const postBlock = document.querySelector(".news__block");
      const elem = document.createElement("div");
      elem.classList = "post";
      elem.innerHTML += `
      <a href="#" class="post__img">
        <img
          src=${image.src}
          alt="photographer"
        />
        <div class="post__date">
          <p>12</p>
          <p>Feb</p>
        </div>
      </a>
      <h4 class="post__title">Amazing Blog Post</h4>
      <div class="post__info">
        <span>By Admin</span>
        <span>2 comment</span>
      </div>`;
      postBlock.append(elem);
    });
  }
  
  showImg();