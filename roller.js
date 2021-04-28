function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function buttonClicked() {
    console.log("Roll was clicked")

    var roll = getRandomInt(6)
    console.log( roll )

    var roll2 = getRandomInt(6)
    console.log( roll2 )

    document.getElementById("dice").src = "imgs/die-"+roll+".png" 
    document.getElementById("dice2").src = "imgs/die-"+roll2+".png" 

    if ( roll == roll2 ) {

        document.getElementById("status").innerHTML = "Dice are Equal - DOUBLES!"

    } else {

        document.getElementById("status").innerHTML = "Player Rolled: " + (roll + roll2)

    }

    // var node = document.createElement("TD");
    // var text = document.createTextNode( roll )
    // node.appendChild(text)
    // document.getElementById("rolls").appendChild(node)


    //document.getElementById("1").innerHTML = roll
    
}


  
