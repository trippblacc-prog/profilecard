document.getElementById('time-counter').textContent = Date.now();

const inputfile = document.getElementById('upload-image');
const userimage = document.getElementById('user-image');

inputfile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const Imagelink = URL.createObjectURL(file);
        userimage.src = Imagelink;
        console.log('Image Link:', Imagelink);
    }
});