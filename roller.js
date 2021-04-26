function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function buttonClicked() {
    console.log("Roll was clicked")

    var roll = getRandomInt(6)
    console.log( roll )

    var node = document.createElement("TD");
    var text = document.createTextNode( roll )
    node.appendChild(text)
    document.getElementById("rolls").appendChild(node)


    //document.getElementById("1").innerHTML = roll
    
}


  
