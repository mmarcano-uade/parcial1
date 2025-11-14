document.addEventListener("DOMContentLoaded", () => {
          const form= document.getElementById("contactForm")
          console.log(form)
          form.addEventListener("submit", (e) => {
            console.log("felll")
            event.preventDefault(); 
            
            const lastname = document.getElementById("lastnameInput")
            const name = document.getElementById("nameInput")
            const message = document.getElementById("messageTextArea")

            const errorName = document.getElementById("error-text-name")
            const errorLastname = document.getElementById("error-text-lastname")
            const errorMessage = document.getElementById("error-text-area")
        
            errorName.classList.remove("error_display")
            errorLastname.classList.remove("error_display")
            errorMessage.classList.remove("error_display")
            if ( !name.value ){
              errorName.classList.toggle("error_display")
            }
            if ( !lastname.value ){
              errorLastname.classList.toggle("error_display")
            }
             if ( !message.value ){
              errorMessage.classList.toggle("error_display")
            }
            
          });

        })