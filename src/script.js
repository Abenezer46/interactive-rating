const btnContainer = document.querySelector(".rating"),
btns = btnContainer.getElementsByClassName("button"),
submitEl = document.querySelector(".submit");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }

submitEl.addEventListener("click", submit);


function submit() {

    let selectedBtn = document.querySelector(".active").value;

    document.querySelector( '.rating-start' ).style.display = 'none';
    document.querySelector( '.thank-you' ).style.display = 'flex';

    let selection = document.querySelector(".selection");

    selection.innerHTML= `You selected ${selectedBtn} out of 5`;
    
    
}
