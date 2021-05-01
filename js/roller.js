var diceCount = 2
var autoRoll = false
var stopRolling = false

// Get a Random Integer between 1 and Max Value Parameter
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Add a Dice to the Container
function addDice() {

    console.log("adding dice...")

    var node = document.createElement("IMG")
    node.setAttribute("src", "imgs/die-1.png")
    // could also set id attribute here if needed
    document.getElementById("container").appendChild(node)

    // Increment Sidebar's Dice Count
    document.getElementById("diceCount").value++


    console.log("dice added")
}

// Remove a Dice from the Container
function removeDice() {
    console.log("removing dice...")

    var container = document.getElementById("container")   // Get the containing element with id="myList"
    container.removeChild(container.childNodes[0])          // Remove <ul>'s first child node (index 0) 

    // Decrement Sidebar's Dice Count
    document.getElementById("diceCount").value--

    console.log("dice removed")
}

// Roll All Dice
function rollDice() {
    console.log("rolling all dice...")

    // Initialize Sum at Zero
    var sum = 0

    var container = document.getElementById("container")
    for (var i = 0; i < container.childNodes.length; i++) {

        // get random integer
        var roll = getRandomInt(6)

        console.log("rolled " + roll)

        // update the image
        container.childNodes[i].src = "imgs/die-" + roll + ".png"

        sum += roll
    }

    // Update Status with Sum of Dice Rolled
    document.getElementById("status").innerHTML = "Player Rolled: " + sum

    // Check if AutoRoller is Enabled and Still Rolling
    checkForAutoRoller()

    console.log("all dice rolled")

}

// Set Dice Count Explicitly instead of Individual Increment
function setDiceCount(inputElement) {

    var newDiceCount = inputElement.value

    console.log("setting dice count to " + newDiceCount + "...")

    //Clear Container of All Dice
    var container = document.getElementById("container")
    container.innerHTML = ""
    inputElement.value = 0

    // Loop to Add Input Number of Dice
    for (var i = 0; i < newDiceCount; i++) {
        addDice()
    }

    console.log("dice count set to " + newDiceCount + "...")
}

// Configure Auto Roller
function configureAutoRoller(checkboxSetting) {

    autoRoll = checkboxSetting.checked

    if (autoRoll) {
        document.getElementById("rollButton").innerHTML = "AUTO ROLL"
    } else {
        document.getElementById("rollButton").innerHTML = "ROLL!"
        document.getElementById("rollButton").onclick = rollDice
    }
}

// Check if AutoRoller is Enabled and Still Rolling
function checkForAutoRoller() {
    
    // If the AutoRoller is Enabled and the StopRolling Flag hasn't been set to True, change Roll Button Text to "Stop Rolling"
    if (autoRoll && !stopRolling) {

        // Update Roll Button Text
        document.getElementById("rollButton").innerHTML = "STOP ROLLING"

        // Update Roll Button onClick Handler
        // This is called a JS Anonymous Function, we can define the onclick logic right here
        document.getElementById("rollButton").onclick = () => {
            console.log("stop rolling requested - setting stopRolling flag")
            stopRolling = true
        }

        // Roll Dice again in one thousand milliseconds (1 second)
        setTimeout(rollDice, 1000);
    } else if (stopRolling) {
        console.log("stopping rolls...")
        document.getElementById("rollButton").innerHTML = "AUTO ROLL"
        document.getElementById("rollButton").onclick = rollDice

        // Reset stopRolling Flag so AutoRoll works next time
        stopRolling = !stopRolling
    }
}