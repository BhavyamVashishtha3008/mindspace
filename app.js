function talk(){
    var know = {
     "Who are you" : "Hello, I am special bot. Welcome to MindSpace",
     "How are you" : "Good :)",
     "What can I do for you" : "Please stay happy and live life to its fullest",
     "I am feeling depressed" : "I think you should meet new people",
     "ok" : "Thank You So Much ",
     "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
     document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
     document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
   }
