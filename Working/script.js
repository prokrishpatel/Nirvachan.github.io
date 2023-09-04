
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("default-login").click();

  let slideIndex = 0;

  function showSlides() {
      let slides = document.querySelectorAll(".slide");
      
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      slideIndex++;

      if (slideIndex > slides.length) {
          slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";

      // Change slides every 5 seconds
      setTimeout(showSlides, 7000);
  }

  // Call the function to start the slideshow
  showSlides();

// Login Check

document.getElementById("Login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Get the user-entered values
  var enteredUser = document.getElementById("luser").value;
  var enteredPassword = document.getElementById("lpass").value;

  // Check if the entered values match the expected values
  if (enteredUser === "9302310053" && enteredPassword === "121023") {
    // Redirect to dashboard.html
    window.location.href = "dashboard.html";
    return true
  } else {
      alert("Invalid credentials"); // Login failed
      return false;
  }
});


