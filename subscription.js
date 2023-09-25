import { displayVideos } from "./videos.js";
import { items } from "./app.js";

  // subscription
  const subscription = document.querySelector('.subscription-video-container');
  let video = items.filter((i) => {
    return i.video === 'video';
  });
  displayVideos(subscription, video);