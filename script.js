// Check for NFC support
if (navigator.nfc) {
    console.log("NFC Supported");
  
    // Function to handle successful tag read
    function handleReadSuccess(nfcEvent) {
      const tag = nfcEvent.target;
      const tagByteArray = nfcEvent.data.getBytes(); // Get raw byte data from tag
      const content = new TextDecoder().decode(tagByteArray); // Decode bytes to string
      document.getElementById("content-container").textContent = content;
    }
    
    // Function to handle reading errors
    function handleReadError(error) {
      console.error("NFC Read Error:", error);
      // Display error message to user
    }
  
    // Request user permission to use NFC
    navigator.nfc.requestPermission()
      .then(() => {
        // Start listening for NFC tags
        navigator.nfc.onNfcDetected = handleReadSuccess;
        navigator.nfc.onerror = handleReadError;
      })
      .catch(error => {
        console.error("NFC Permission Error:", error);
        // Handle permission denial
      });
  } else {
    console.error("NFC Not Supported");
    // Display message informing user that NFC is not available
  }
  