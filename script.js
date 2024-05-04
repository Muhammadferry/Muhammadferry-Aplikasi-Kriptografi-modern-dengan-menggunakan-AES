function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var key = document.getElementById("key").value;
  
    var encryptedText = CryptoJS.AES.encrypt(inputText, key).toString();
    
    document.getElementById("outputText").value = encryptedText;
  }
  
  function decrypt() {
    var encryptedText = document.getElementById("inputText").value;
    var key = document.getElementById("key").value;
  
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedText, key);
    var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    
    document.getElementById("outputText").value = decryptedText;
  }
  