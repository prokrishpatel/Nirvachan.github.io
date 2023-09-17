//retriving userid
// Function to get URL parameters by name
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Retrieve the user's ID from the URL parameter
var userId = getUrlParameter('userId');
console.log(userId)

// Retrieve users from localStorage
var users = JSON.parse(localStorage.getItem("users")) || [];

var foundUser = users.find(function (user) {
    return user.mobile_no === userId;
});

// Check if a user was found
if (foundUser) {
    // Add more details as needed
    var result = "";
    result += '<b>'+foundUser.first_name +' '+foundUser.last_name +'</b><br><br>';
    result += foundUser.mobile_no + '<br><br>';
    result += foundUser.email + '<br><br>';
    result += 'Aadhar No: '+foundUser.aadhar_no + '<br><br>';
    result += 'Voter Id: '+foundUser.voter_id + '<br><br>';

    document.querySelector(".profile-content").innerHTML = result;
} 



//side-panel
var sidePanel = document.querySelector(".side-panel");
// Function to open the side panel
function openSidePanel() {
    sidePanel.style.right = "0rem";
}

// Function to close the side panel
function closeSidePanel() {
    sidePanel.style.right = "-20rem";
}

var profile = document.querySelector(".profile")
profile.addEventListener("click",function(e){
    openSidePanel()
})

var cross = document.getElementById("cross")
cross.addEventListener("click", function(e)
{
    closeSidePanel()
})

document.addEventListener("DOMContentLoaded", function () {
    const slideShow = document.getElementById("slide-show");
    const images = slideShow.querySelectorAll("img");
    const slideDuration = 5000; // 5 seconds

    let currentImageIndex = 0;

    function showImage(index) {
        images[index].style.display = "block";
        setTimeout(function () {
            images[index].style.display = "none";
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }, slideDuration);
    }

    // Start the slideshow
    showImage(currentImageIndex);
});