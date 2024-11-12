const arr = [{
  dp:'images/dp-1.jpg',
  story: 'images/story-1.jpg'
},
{
  dp: 'images/dp-2.jpg',
  story: 'images/story-2.jpg'
},
{
  dp: 'images/dp-3.jpg',
  story: 'images/story-3.jpg'
},
{
  dp: 'images/dp-4.jpg',
  story: 'images/story-4.jpg'
},
{
  dp: 'images/dp-5.jpg',
  story: 'images/story-5.jpg'
}];

const storyContainer = document.querySelector('.storyContainer');
const story = document.querySelector('.story');
let clutter = '';

arr.forEach((value,index)=>{
  clutter += `<div class="story">
              <img id="${index}" src="${value.dp}" alt="">
              </div>`;
});

storyContainer.innerHTML = clutter ;

storyContainer.addEventListener('click',event=>{
  document.querySelector('.full-screen').style.display = 'block';
  document.querySelector('.full-screen').style.backgroundImage = `url(${arr[event.target.id].story})`;
  
  setTimeout(() => {
    document.querySelector('.full-screen').style.display = 'none';
  }, 3000);
});
