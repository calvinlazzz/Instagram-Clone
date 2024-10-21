let images = document.querySelectorAll('.image-container img');
let viewImage = document.querySelector('.view-image');
let imageContainer = document.querySelector('.image-container');
let fullImage = document.querySelector('.full-image');

async function getImage(){
    let res = await fetch('https://picsum.photos/400/500');
    let url = res.url
    let img = document.createElement('img');
    img.src = url;
    imageContainer.appendChild(img);
    img.addEventListener('click', function(e){
    viewImage.style.display = 'flex';
    fullImage.src = e.target.src;

    })
    getImage();
}