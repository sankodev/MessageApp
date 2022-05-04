// messaging app basic

var messages = document.getElementByID("messages");
var textbox = document.getElementByID("textbox");
var button = document.getElementByID("button");

//execute click
button.addEventListener("click", function (){
    var newMessage = document.createElement("listItem);
    // setting inner HTML equal to value in list item
    newMessage innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
});
