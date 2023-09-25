import { singleItemVideo , displayBtns} from "./videos.js";
import { items } from "./app.js";



// sidebar videos
const singleVideoContainer = document.querySelector(
  '.section-single-video-sidebar'
);
let video = items.filter((i)=>{
  return i.video === 'video'
})
singleItemVideo(singleVideoContainer,video);





