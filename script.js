// Generate a random CAPTCHA
function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-text").innerText = captcha;
  }
  
  // Validate CAPTCHA before form submission
  function validateCaptcha() {
    const enteredCaptcha = document.getElementById("captcha-input").value;
    const actualCaptcha = document.getElementById("captcha-text").innerText;
  
    if (enteredCaptcha !== actualCaptcha) {
      document.getElementById("captcha-error").innerText = "Incorrect CAPTCHA. Try again!";
      document.getElementById("captcha-error").style.display = "block";
      return false; // Prevent form submission
    }
  
    document.getElementById("captcha-error").style.display = "none";
    return true; // Allow form submission
  }
  
  // Generate CAPTCHA on page load
  window.onload = generateCaptcha;
  
// Generate a random CAPTCHA
function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-text").innerText = captcha;
  }
  
  // Validate CAPTCHA before form submission
  function validateCaptcha() {
    const enteredCaptcha = document.getElementById("captcha-input").value;
    const actualCaptcha = document.getElementById("captcha-text").innerText;
  
    if (enteredCaptcha !== actualCaptcha) {
      document.getElementById("captcha-error").innerText = "Incorrect CAPTCHA. Try again!";
      document.getElementById("captcha-error").style.display = "block";
      return false; // Prevent form submission
    }
  
    document.getElementById("captcha-error").style.display = "none";
    return true; // Allow form submission
  }
  
  // Generate CAPTCHA on page load
  window.onload = generateCaptcha;
  