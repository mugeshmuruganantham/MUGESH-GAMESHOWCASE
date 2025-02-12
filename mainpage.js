

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

//************************* */ Script for moving CARD***************************88
$(document).ready(function() {
    var currentIndex = 0;
    var images = $('.image');
    var dots = $('.dot');

    function showImage(index) {
        images.removeClass('active'); // Hide all images
        dots.removeClass('active'); // Deactivate all dots
        images.eq(index).addClass('active'); // Show the image at the specified index
        dots.eq(index).addClass('active'); // Activate the corresponding dot
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    var intervalId = setInterval(nextImage, 2000); // Change image every 3 seconds


// Click event for dots
dots.click(function() {
    var index = $(this).index();
    showImage(index);
});

// Initial display of images (showing the first image)
showImage(0);
});
// ****************For Showing info of the card
function toggleDetails() {
  var details = document.querySelector('.card-details');
  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
}




// function toggleDetails(icon) {
//   // Get the parent element of the clicked "i" icon
//   var cardContainer = icon.parentElement;
  
//   // Find the associated card details within the same parent element
//   var details = cardContainer.querySelector('.card-details');
  
//   // Toggle the display property of the card details
//   if (details.style.display === 'none' || details.style.display === '') {
//     details.style.display = 'block';
//   } else {
//     details.style.display = 'none';
//   }
// }

{/* <div class="info-option" onclick="toggleDetails(this)">i</div>
<div class="card-details">
  <p>Call of Duty: Warzone is a free-to-play battle royale game set in the iconic Call of Duty universe. Players compete in large-scale, last-man-standing matches, utilizing a variety of weapons and tactics to emerge victorious.</p>
</div> */}




