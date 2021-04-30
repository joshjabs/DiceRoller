function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function addDice() {

    var node = document.createElement("IMG")
    node.setAttribute("src", "imgs/die-1.png")
    // set id attribute
    document.getElementById("container").appendChild(node)

}

function removeDice() {

    var container = document.getElementById("container");   // Get the containing element with id="myList"
    container.removeChild(container.childNodes[0]);           // Remove <ul>'s first child node (index 0) 
}

function buttonClicked() {

    addDice()

}

// Old Handler
function buttonClicked2() {
    console.log("Roll was clicked")

    var roll = getRandomInt(6)
    console.log( roll )

    var roll2 = getRandomInt(6)
    console.log( roll2 )

    //Update Dice
    document.getElementById("dice").src = "imgs/die-"+roll+".png" 
    document.getElementById("dice2").src = "imgs/die-"+roll2+".png" 

    //Check If Doubles
    if ( roll == roll2 ) {

        document.getElementById("status").innerHTML = "Dice are Equal - DOUBLES!"

    } else {

        document.getElementById("status").innerHTML = "Player Rolled: " + (roll + roll2)

    }
    
}


  
