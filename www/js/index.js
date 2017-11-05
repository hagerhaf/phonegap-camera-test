
document.addEventListener('deviceready', function() {
    /* Javascript for device api here... */
    console.log('\n-------------\nDEVICE READY');

    //indicate the device is ready and camera is ready
    var listeningElement = document.querySelector('.listening');
    listeningElement.innerHTML = "device ready";
    listeningElement.style.backgroundColor = "#01DA04";

    //launch camera
    document.getElementById('camera-btn').addEventListener('click', takePic);
});

function takePic() {
    console.log('click');
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
}


function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
