let images = document.querySelectorAll('.image-container img');
let viewImage = document.querySelector('.view-image');
let imageContainer = document.querySelector('.image-container');
let fullImage = document.querySelector('.full-image');
let closeBtn = document.querySelector(".view-image span");
let account = document.querySelector('.account');
for(let image of images){
    image.addEventListener('click', function(e){
        viewImage.style.display = 'flex';
        fullImage.src = e.target.src;
    })
}
closeBtn.addEventListener('click',function(){
    viewImage.style.display = "none";
})
async function getImage(){
    let res = await fetch('https://picsum.photos/400/500');
    let res1 = await fetch('https://picsum.photos/200');
    let url = res.url
    let img = document.createElement('img');
    let prof = document.createElement('img');
    let profileName = document.createElement('p');
    img.src = url;
    prof.src = res1.url;
    profileName.textContent = 'profile name';
    //imageContainer.innerHTML = `<p>profile name</p>`;
    //account.appendChild(profileName);
    imageContainer.appendChild(prof);
    imageContainer.appendChild(img);
   
    img.addEventListener('click', function(e){
    viewImage.style.display = 'flex';
    fullImage.src = e.target.src;

    })
 
    profileName.textContent = 'profile name';
    imageContainer.insertBefore(profileName, prof);
    
}
// Add CSS styles to adjust the size and positioning of the profile image and name




// Modify the getImage function to use the new profile-container class
function getImage() {
    fetch('https://picsum.photos/400/500')
        .then(res => res.url)
        .then(url => {
            let img = document.createElement('img');
            img.src = url;
            imageContainer.appendChild(img);
            img.addEventListener('click', function(e) {
                viewImage.style.display = 'flex';
                fullImage.src = e.target.src;
            });
        });

    fetch('https://picsum.photos/200')
        .then(res => res.url)
        .then(url => {
            let prof = document.createElement('img');
            let profileName = document.createElement('p');
            let profileContainer = document.createElement('div');
            profileContainer.classList.add('profile-container');
            prof.src = url;
            profileName.textContent = 'profile name';
            profileContainer.appendChild(prof);
            profileContainer.appendChild(profileName);
            imageContainer.insertBefore(profileContainer, imageContainer.firstChild);
        });
}
getImage();
getImage();
getImage();
window.addEventListener('scroll', function(){
    let{clientHeight, scrollHeight, scrollTop} = document.documentElement;
    if(clientHeight + scrollTop+1 >= scrollHeight){
        getImage();
    }
})
