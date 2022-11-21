function returnText() {

    //SAVE THE VALUE WRITTEN INSIDE INPUT;

    var text = document.getElementById("userInput").value;

    //CREATE A NEW div  TO STORE THE VALUE OF PARA

    var div = document.createElement("div")

    //CREATE A NEW P  TO STORE THE VALUE OF PARA

    var para = document.createElement("p");

    para.innerHTML = text;

    div.appendChild(para);

    console.log(para);

    // Append to body:
    document.body.appendChild(div);

    // TO CLEAR THE WRITTIN BAR EVER TIME AFTER  ADDING

    document.getElementById("userInput").value = " ";

    //FUNCTION TO MAKE NEW BUTTON ALL THE TIME

    var x = document.createElement("button");
    var t = document.createTextNode("DONE");
    x.appendChild(t);
    document.body.appendChild(x);

    //WHILE LOOP TO MAKE DIFFERENT BUTTON FOR DIFFERENT P TAGS

    var i = 2;
    while (i < 10) {
        document.querySelectorAll("button")[i].classList.add("text_clear_all");
        i++;
    }

}

//FUNCTION OF CLEAR ALL BUTTON

function clearall() {
    location.reload();
}

// document.querySelector(".text_clear_all").setAttribute("onclick", "del()");
// function del() {
//     var del = document.createElement("del");
//     del.innerHTML = para;
//     div.appendChild(del);
//     console.log(del);
//     document.body.appendChild(del);
// }

function darkmode()
{
    document.querySelector("body").style.backgroundColor="black";
}


function lightmode()
{
    document.querySelector("body").style.backgroundColor="#1a1a60be";
}
