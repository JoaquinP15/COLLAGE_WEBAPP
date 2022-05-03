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

setTimeout(function()
{
    img_id = "selfie1";
    takesnapshot();
    speak_data = "Taking Your selfie In 5 seconds";
    var utterThis = new speechSynthesis(speak_data);
    synth.speak(utterThis);
}, 5000);