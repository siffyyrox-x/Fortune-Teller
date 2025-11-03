let fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "A journey of a thousand miles begins with a single step.",
    "Your hard work will soon pay off in unexpected ways.",
    "Good things come to those who wait, but better things come to those who work.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your kindness will be returned to you tenfold.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Happiness is not something ready made. It comes from your own actions."
];

function displayRandomFortune() {
    var randomNumber = Math.floor(Math.random() * fortunes.length);
    var selectedFortune = fortunes[randomNumber];
    document.getElementById("fortuneText").innerText = selectedFortune;
}


function changeColor(color) {
    let fortuneBox = document.getElementById("fortuneBox");
    let fortuneText = document.getElementById("fortuneText");

    if (color === "green") {
        fortuneBox.style.backgroundColor = "lightgreen";
        fortuneBox.style.borderColor = "darkgreen";
        fortuneText.style.color = "darkgreen";
        fortuneText.style.fontSize = "20px";
        fortuneText.style.fontFamily = "Verdana, sans-serif";
    } 
    else if (color === "yellow") {
        fortuneBox.style.backgroundColor = "lightyellow";
        fortuneBox.style.borderColor = "gold";
        fortuneText.style.color = "darkgoldenrod";
        fortuneText.style.fontSize = "19px";
        fortuneText.style.fontFamily = "Georgia, serif";
    } 
    else if (color === "blue") {
        fortuneBox.style.backgroundColor = "lightblue";
        fortuneBox.style.borderColor = "darkblue";
        fortuneText.style.color = "darkblue";
        fortuneText.style.fontSize = "21px";
        fortuneText.style.fontFamily = "Courier New, monospace";
    } 
    else if (color === "orange") {
        fortuneBox.style.backgroundColor = "lightyellow";
        fortuneBox.style.borderColor = "darkorange";
        fortuneText.style.color = "darkorange";
        fortuneText.style.fontSize = "22px";
        fortuneText.style.fontFamily = "Times New Roman, serif";
    }
}
displayRandomFortune();