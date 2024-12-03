document.getElementById('contactForm').addEventListener('submit', function(event) { event.preventDefault(); 
    alert('Thank you for your message!'); 
}); 

document.addEventListener('DOMContentLoaded', function() { 
    var audio = document.getElementById('backgroundMusic'); 
    audio.volume = 0.2; // Adjust volume level 
});