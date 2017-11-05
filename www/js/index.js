
document.addEventListener('deviceready', function() {
    /* Javascript for device api here... */
    console.log('\n-------------\nDEVICE READY');

    //indicate the device is ready and camera is ready
    var listeningElement = document.querySelector('.listening');
    listeningElement.innerHTML = "device ready";
    listeningElement.style.backgroundColor = "#01DA04";

    //on click of button launch camera
    document.getElementById('camera-btn').addEventListener('click', takePic);
});


//camera functions:
//activate camera, take picture, then trigger onSuccess or onFail callback functions
function takePic() {
    console.log('click');
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
}

//Do something with the captured photo
function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

//Alert that the photo was not captured
function onFail(message) {
    alert('Failed because: ' + message);
}
