function checkForm() {
   let error = false;
 
   const contactName = document.getElementById("contactName");
   const contactSurname = document.getElementById("nazwisko");
   const contactEmail = document.getElementById("contactEmail");
 
   // Reset klas
   [contactName, contactSurname, contactEmail].forEach(input => {
     input.classList.remove("is-valid", "is-invalid");
   });
 
   // Imię
   if (contactName.value.trim() === "") {
     contactName.classList.add("is-invalid");
     error = true;
   } else {
     contactName.classList.add("is-valid");
   }
 
   // Nazwisko
   if (contactSurname.value.trim() === "") {
     contactSurname.classList.add("is-invalid");
     error = true;
   } else {
     contactSurname.classList.add("is-valid");
   }
 
   // Email
   const emailValue = contactEmail.value.trim();
   const regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,4}$/;
 
   if (emailValue === "" || !regex.test(emailValue)) {
     contactEmail.classList.add("is-invalid");
     error = true;
   } else {
     contactEmail.classList.add("is-valid");
   }
 
   return !error;
 }
 
 function initWordLimit(textareaId, counterId, maxWords) {
   const textarea = document.getElementById(textareaId);
   const wordCountDisplay = document.getElementById(counterId);
 
   if (!textarea || !wordCountDisplay) return;
 
   textarea.addEventListener("input", () => {
     let text = textarea.value.trim();
     let words = text.split(/\s+/).filter(word => word.length > 0);
     let wordCount = words.length;
 
     if (wordCount > maxWords) {
       words = words.slice(0, maxWords);
       textarea.value = words.join(" ");
       wordCount = maxWords;
     }
 
     wordCountDisplay.textContent = `${wordCount} / ${maxWords} słów`;
   });
 }
 