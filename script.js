
// toast
let toastbox=document.getElementById('toastbox');

        let successmsg='<i class="fa-solid fa-circle-check"></i>successfully submitted';
        let errormsg='<i class="fa-solid fa-circle-xmark"></i>please fix the error';
        let invalidmsg='<i class="fa-solid fa-circle-exclamation"></i>not avilable';

        function showtoast(msg){
            let toast=document.createElement('div');
            toast.classList.add('toast');
            toast.innerHTML=msg;
            toastbox.appendChild(toast);

            if(msg.includes('error')){
                toast.classList.add('error');
            }
            if(msg.includes('not')){
                toast.classList.add('not');
            }

            setTimeout(()=>{
                toast.remove();
            },6000);
        }


// chatbot
        var chatWindow = document.getElementById("chatWindow");

        function toggleChat() {
          if (chatWindow.style.display === "none") {
            chatWindow.style.display = "block";
            document.getElementById("toggleBtn").textContent = "Close";
            openChat();
          } else {
            chatWindow.style.display = "none";
            document.getElementById("toggleBtn").textContent = "Open";
          }
        }
        
        function openChat() {
          var messages = document.querySelectorAll(".message");
          var delay = 0;
        
          messages.forEach(function(message) {
            setTimeout(function() {
              message.style.transform = "translateY(0)";
              message.style.opacity = "1";
            }, delay);
        
            delay += 150;
          });
        }
        
        function sendMessage(message) {
          var messageElement = document.createElement("div");
          messageElement.classList.add("message");
          messageElement.textContent = message;
          document.querySelector(".messages").appendChild(messageElement);
        
          openChat();
          
          switch (message.toLowerCase()) {
            case "hello":
              setTimeout(function() {
                addBotResponse("-Hi! How can I assist you?");
              }, 400);
              break;
            case "how are you?":
              setTimeout(function() {
                addBotResponse("-I'm doing well. Thank you!");
              }, 400);
              break;
            case "contact number":
                setTimeout(function() {
                  addBotResponse("-Mobile Numebr : 07588737416");
                }, 400);
              break; 
            case "mail id":
                setTimeout(function() {
                  addBotResponse("-Gmail id : rohan.patil1594@gmail.com");
                }, 400);
              break;  
            case "goodbye":
              setTimeout(function() {
                addBotResponse("-Goodbye! Have a great day!");
              }, 400);
              break;
            default:
              setTimeout(function() {
                addBotResponse("-Sorry, I didn't understand that. Can you please rephrase?");
              }, 400);
          }
        }
        
        function addBotResponse(response) {
          var messageElement = document.createElement("div");
          messageElement.classList.add("message");
          messageElement.textContent = response;
          document.querySelector(".messages").appendChild(messageElement);
        
          openChat();
        }
        