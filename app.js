let displayScreen = document.querySelector("#display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    content = e.target.innerText;
    switch (content) {
      case "delete":
        displayScreen.innerText = "";
        break;

      case "←":
        displayScreen.innerText = displayScreen.innerText.slice(0 , -1);
       
        break;

        case "total":
            displayScreen.innerText = eval(displayScreen.innerText);
            if(displayScreen.innerText = NaN){
                displayScreen.innerText = 'sorry mr ismail, not a number'
    
            }
            break;

      default:
        displayScreen.innerText += e.target.innerText;
        break;
    }
  });
});
