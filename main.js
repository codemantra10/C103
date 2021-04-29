
Webcam.set({
height:490,
width:490,
image_format:'png',
png_quality:90,
})
Webcam.attach("#camera")
function takeimage(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img src='"+data_uri+"'id='ifs'>";
})
}
console.log("ml5version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DPWtOmq5L/model.json",modelloaded);
function modelloaded(){
console.log("My model will crush you and make history!I will be famous in class!")
}