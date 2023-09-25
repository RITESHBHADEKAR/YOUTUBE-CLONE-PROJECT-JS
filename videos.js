const displayVideos = (element, items) => {
  element.innerHTML = items
    .map((i) => {
      return `<article class="card" data-id = "${i.id}">
            <div class="img-container">
              <a href="./single-page.html?id="${i.id}" ">
                <img src="${i.img}" alt="" class="img" />
              </a>
              <div class="time-container">
                <p class="time">${i.time}</p>
              </div>
            </div>
            <div class="thumbnail-container flex-row">
              <div class="icon-container">
                <img
                  src="${i.logo}"
                  alt=""
                  class="img"
                />
              </div>
              <div class="text-container">
                <h4>${i.title}</h4>
                <p class="name">${i.name}</p>
                <div class="card-footer">
                  <p class="views">${i.views}</p>
                  <p class="years">${i.years}</p>
                </div>
              </div>
            </div>
          </article>`;
    })
    .join(' ');
};

// shorts
const displayShort = (element, item) => {
  element.innerHTML = item
    .map((i) => {
      return `<article class="shorts-card" data-id ="${i.id}">
              <div class="shorts-img-container">
                <a href="./shorts.html">
                  <img
                    src="${i.img}"
                    alt=""
                    class="img"
                  />
                </a>
              </div>
              <div class=" shorts-text-container">
                <h4>${i.title}</h4>
                <p class="views">${i.views}</p>
              </div>
            </article>`;
    })
    .join(' ');
};
// shorts
const displayAllShort = (element, allitems) => {
  element.innerHTML = allitems
    .map((e) => {
      return `<article class="shorts-card">
            <div class="shorts-img-container">
              <a href="./shorts.html">
                <img
                  src="${e.img}"
                  alt=""
                  class="img"
                />
              </a>
            </div>
            <div class="thumbnail-container short-texts">
              <h4>${e.title}</h4>
              <div class="icon-container">
                <img
                  src="${e.logo}"
                  alt=""
                  class="img"
                />
                <p class="name">@${e.name}</p>
                <button class="btn short-btn" style="margin: 0">
                  subscribe
                </button>
              </div>
            </div>
            <div class="shorts-all-icons">
              <button class="shorts-icon ">
                <img style="filter: invert(1);" src="./youtube-images/main-icons/like-new.png" class="like-btn  " alt="">
                <p>like</p>
              </button>
              <button class="shorts-icon">
                <img src="./youtube-images/main-icons/dislike-new.png" class="dislike-btn" alt=""style="filter: invert(1);">
                <p>Dislike</p>
              </button>
              <button class="shorts-icon">
                <img src="./youtube-images/main-icons/comment-new.png"  alt=""style="filter: invert(1);">
                <p>comments</p>
              </button>
              <button class="shorts-icon">
                <img src="./youtube-images/main-icons/share-new.png" alt=""style="filter: invert(1);">
                <p>share</p>
              </button>
              <button class="shorts-icon">
                <img src="./youtube-images/main-icons/more-new.png" alt="" >
                <p>More</p>
              </button>
              <button class="shorts-icon">
                <img src="${e.logo}" alt="">
              </button>
            </div>
          </article>`;
    })
    .join(' ');
};

const displayBtns = (element,item)=>{
    element.innerHTML = item
      .map((btn) => {
        return `<button class="btn home-btn">${btn}</button>
`;
      })
      .join(' ');
}





const singleItemVideo = (element,item)=>{
  element.innerHTML = item.map((i)=>{
    return `<article class=" single-video-sidebar ">
            <div class="img-container">
              <a href="./single-page.html" >
                <img src="${i.img}" alt="" class="img" style="border-radius: 0.65rem; min-height: 100px; position: absolute; width: 100%;" />
              </a>
              <div class="time-container">
                <p class="time">${i.time}</p>
              </div>
            </div>
            <div class="text-container">
                <h4>${i.title}</h4>
                <p class="name">${i.name}</p>
                <div class="card-footer ">
                  <p class="views">${i.views}</p>
                  <p class="years">${i.years}</p>
                </div>
              </div>
          </article>`;
  }).join(' ')
}

export { displayVideos, displayShort, displayAllShort , displayBtns,singleItemVideo};
