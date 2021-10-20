// GET the string
function getTheString(){
    document.getElementById("alert").classList.add("invisible");
    let urText = document.getElementById("userString").value;
    let revText = reverseTheString(urText)
    displayTheString(revText)
}

// Reverse the string
function reverseTheString(urText){
    if (userString.length > 1) {
        let revString = [];
        for (let index = urText.length - 1; index >= 0; index--) {
            revString += urText[index];
        }
    }   
    else {
        alert("You must enter atleast 2 characters in order to reverse!")
    }
    return revString;
}

// Display the string
function displayTheString(revText){
    document.getElementById("msg").innerHTML = `Your reversed string is: ${revText}`;
    document.getElementById("alert").classList.remove("invisible");
}