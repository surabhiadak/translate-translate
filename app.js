var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occurred", error);
    alert("something is wrong with the server. Try again after some time")
}

//taking input
function clickEventHandler(){
    var inputText = txtInput.value; 

// calling server for processing 
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText; //output
})
.catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);

