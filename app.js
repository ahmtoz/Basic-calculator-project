const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result")


function clearResults(){
    inputFieldEl.value = " "
}

function calculateResults(){
    inputFieldEl.value = eval(inputFieldEl.value) //javascriptin içinde olan bir fonksiyon 
                                                  // otomatik olarak işlem yapar
}

function appendValue(buttonvalue) {
    inputFieldEl.value += buttonvalue 
}

for (let i = 0 ; i < buttonsEl.length ; i++ ) {
    buttonsEl[i].addEventListener("click", function(){
        const buttonvalue = (buttonsEl[i].textContent)
        if(buttonvalue === "C"){
            clearResults()

        } else if (buttonvalue === "="){
            calculateResults()

        } else {
            appendValue(buttonvalue)
        }
    })
}

 