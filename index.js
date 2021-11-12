const videoElement = document.querySelector("#video");
const button = document.querySelector('#button');

// Prompt to select media stream and insert it into the video element

async function selectStream(){
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = stream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    } catch (error) {
        console.log("There was an error");
    }
}

button.addEventListener('click', async ()=>{
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})
selectStream()