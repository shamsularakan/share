const shareBtn = document.querySelector('#share-btn');
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share');
const title = window.document.title
const url = window.document.location.href
//console.log(title);
//console.log(url);
  shareBtn.addEventListener('click',()=>{
    // overlay.classList.add('show-share')
    // shareModal.classList.add('show-share')
  //console.log(url);
  if(navigator.share) {
    navigator.share( {
      title:`${title}`,
      url:`${url}`,
    }).then(() => {
      console.log(`thanks for sharing`);
    }).catch(console.error)
  }else{
    overlay.classList.add('show-share')
    shareModal.classList.add('show-share')
  }
})

overlay.addEventListener('click',()=>{
  overlay.classList.remove('show-share')
  shareModal.classList.remove('show-share')
})
