/*var InputEmail = document.getElementById('InputElement');

var InputPassword = document.getElementById('InputPassword');*/

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}