var speech_recognition = window.webkitSpeechRecognition;

var recognition = new speech_recognition();

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:500,
});

function takesnapshot()
{
    console.log(img_id);

    webcam.snap(function(data_uri){
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

function start()
{
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    content = event.results[0][0].transcript;

    console.log(content);

    document.getElementById("textbox").innerHTML  = content;

    if(content == "Take my selfie.")
    {
        console.log("take my selfie");

        speak();
    }
}

function speak()
{                                                                              
    var synth = window.speechSynthesis;

    var speakData = "taking your selfie in 5 seconds";

    var utter_this = new SpeechSynthesisUtterance(speakData);

    synth.speak(utter_this);

    Webcam.attach(camera);

    setTimeout(function()
{
    img_id = "selfie1";
    takesnapshot();
    speak_data = "Taking Your selfie In 5 seconds";
    var utterThis = new speechSynthesis(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
    img_id = "selfie2";
    takesnapshot();
    speak_data = "Taking Your selfie In 10 seconds";
    var utterThis = new speechSynthesis(speak_data);
    synth.speak(utterThis);
}, 10000);

setTimeout(function()
{
    img_id = "selfie3";
    takesnapshot();

}, 15000);

}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:500,
});