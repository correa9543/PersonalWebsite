
const interestText = document.getElementById("interest-text");

const interestArray = [
    "Battle Rap", 
    "Music",
    "Beaches", 
    "Running", 
    "Magic", 
    "Cardisty", 
    "SSBM", 
    "SSBU",
    "Rocket League",
    "Escape Rooms",
    "Mango Green Tea",
    "Koreaan BBQ",
    "Soccer",
    "Hiking",
]

function displayInterests(){

    let randomIndex = Math.ceil(Math.random() * interestArray.length - 1);

    displayInterestElement(randomIndex);


}

function displayInterestElement(randomIndex){
    interestText.innerText = interestArray[randomIndex];
}

setInterval(displayInterests,900)
// displayInterests();