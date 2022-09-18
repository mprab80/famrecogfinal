Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="train" src="'+data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8E6Xsizro/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model is Loaded");
}
function check(){
    img=document.getElementById("train");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
    console.error(error);
    }
    else
    console.log(results);
    document.getElementById("nameofobject").innerHTML=results[0].label;
    var i=results[0].confidence.toFixed(2);
    document.getElementById("accuracy%").innerHTML=i*100;
}
