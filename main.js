object="";
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
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6OzYz_jAU/model.json",modelloaded);
function modelloaded(){
console.log("My model will crush you and make history!I will be famous in");
}
function analyze(){
img=document.getElementById("ifs");
classifier.classify(img,gotresult);
}
function gotresult(error,result){
if (error) {
console.error(error);
}
else{
console.log(result)
confidence=result[0].confidence;
secondstage=confidence.toFixed(3);
finalresult=secondstage*100;
document.getElementById("accuracy_value").innerHTML=finalresult+"%";
object=result[0].label;
document.getElementById("object_name").innerHTML=object+" is being shown in the image"
}
}

