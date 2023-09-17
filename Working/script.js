
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
  e.preventDefault();

  var enteredUser = document.getElementById("luser").value;
  var enteredPassword = document.getElementById("lpass").value;

  // Retrieve users from localStorage
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if a user with the entered mobile number exists
  var loggedInUser = users.find(function (user) {
      return user.mobile_no === enteredUser && user.password === enteredPassword;
  });

  if (loggedInUser) {
      // Redirect to the dashboard or any other authenticated page
    //   window.location.href = "Working/dashboard.html";
    window.location.href = "Working/dashboard.html?userId=" + loggedInUser.mobile_no;

    
  } else {
      alert("Invalid credentials. Please check your mobile number and password.");
  }
});


//register


document.getElementById("Register-form").addEventListener("submit", function (e) {
  e.preventDefault();

  var first_name = document.getElementById("first-name").value;
  var last_name = document.getElementById("last-name").value;
  var mobile_no = document.getElementById("mobile-number").value;
  var email = document.getElementById("email").value;
  var aadhar_no = document.getElementById("adn").value;
  var voter_id = document.getElementById("vid").value;
  var pass = document.getElementById("new-pass").value;

  // Check if the user already exists in localStorage
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Create a new user object
  var newUser = {
      first_name: first_name,
      last_name: last_name,
      mobile_no: mobile_no,
      email: email,
      aadhar_no: aadhar_no,
      voter_id: voter_id,
      password: pass,
  };

  // Check if the user already exists
  var userExists = users.some(function (user) {
      return user.mobile_no === mobile_no;
  });

  if (!userExists) {
      users.push(newUser);

      // Save the updated users array in localStorage
      localStorage.setItem("users", JSON.stringify(users));

      alert("Congratulations! You have registered successfully.");
      window.location.href = "index.html"; // Redirect to the login page
  } else {
      alert("User with this mobile number already exists. Please use a different number.");
  }
});





//dashboard
