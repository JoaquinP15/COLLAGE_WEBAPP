var speech_recognition = window.webkitSpeechRecognition;

var recognition = new speech_recognition();

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90,
});

camera = document.getElementById("camera")

function takesnapshot()
{
    console.log(img_id);
}

function start()
{
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    content = event.results[0][0].transcript;

    console.log(content);

    if(content == "selfie")
    {
        console.log("selfie");

        speak();
    }
}

function speak()
{                                                                              
    var synth = window.speechSynthesis;

    var speakData = "taking your selfie in 5 seconds";

    var utter_this = new SpeechSynthesisUtterance(speakData);

    Webcam.attach(camera);

    synth.speak(utter_this);

    setTimeout(function()
{
    img_id = "selfie1";
    takesnapshot();
    speak_data = "Taking Your selfie In 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
    img_id = "selfie2";
    takesnapshot();
    speak_data = "Taking Your selfie In 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 10000);

setTimeout(function()
{
    img_id = "selfie3";
    takesnapshot();

}, 15000);

function takesnapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';
        }
    
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';
        }
    
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>';
        }
    })
}

}