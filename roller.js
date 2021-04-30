function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function addDice() {

    console.log("adding dice")
    var node = document.createElement("IMG")
    node.setAttribute("src", "imgs/die-1.png")
    // could also set id attribute here
    document.getElementById("container").appendChild(node)
    console.log("dice added")
}

function removeDice() {
    console.log("removing dice")
    var container = document.getElementById("container")   // Get the containing element with id="myList"
    container.removeChild(container.childNodes[0])          // Remove <ul>'s first child node (index 0) 
    console.log("dice removed")
}

function rollDice() {
    console.log("rolling dice")

    var sum = 0

    var container = document.getElementById("container")
    for (var i=0; i < container.childNodes.length; i++)
    {

        // get random integer
        var roll = getRandomInt(6)

        // update the image
        container.childNodes[i].src = "imgs/die-" + roll + ".png"

        sum += roll
    }

    document.getElementById("status").innerHTML = "Player Rolled: " + sum

}


  
