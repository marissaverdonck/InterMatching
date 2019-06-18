var checkBox = document.getElementById("confirm");
var jsDeleteBtn = document.querySelector(".jsDeleteBtn");
var form = document.getElementById('deleteForm');
var thanks = document.querySelector(".thankYou");


// If the checkbox is checked, display the output text
jsDeleteBtn.addEventListener("click", function(){
    if (checkBox.checked == true){
      form.classList.add("hide");
      thanks.classList.remove("hide");
    } else {
      console.log("niet gecheckt")
    }
});
