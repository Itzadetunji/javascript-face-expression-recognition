const video = document.getElementById("video");

Promise.all([
    faceapi.nets.tnyFaceDetector.loadFromUri('/models'),
    faceapi.nets.tnyFaceDetector.loadFromUri('/models'),
    faceapi.nets.tnyFaceDetector.loadFromUri('/models'),
    faceapi.nets.tnyFaceDetector.loadFromUri('/models')
])

function startVideo(){
    navigator.getUserMedia(
            { video: {} },
            stream => video.srcObject = stream,
            err => console.error(err)
        )
}

startVideo();