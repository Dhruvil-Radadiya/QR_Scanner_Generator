// Function to generate QR code
function generateQR() {
  let qrText = document.getElementById("qrText").value.trim();
  let qrImage = document.getElementById("qrImage");
  let imgBox = document.getElementById("imgBox");

  // Check if input is empty
  if (qrText === "") {
    alert("Please enter text or URL");
    
    // Add error class for visual feedback
    document.getElementById("qrText").classList.add('error');

    // Remove error class after 1 second
    setTimeout(() => {
      document.getElementById("qrText").classList.remove('error');
    }, 1000);
    return;
  }

  // Generate QR code image
  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText;
  
  // Display QR code container
  imgBox.classList.add("show");
}
