//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDods5cVkbT0zBg9HfgahpZhMXCAP45W9M",
      authDomain: "let-s-chat-14876.firebaseapp.com",
      databaseURL: "https://let-s-chat-14876-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-14876",
      storageBucket: "let-s-chat-14876.appspot.com",
      messagingSenderId: "214078714720",
      appId: "1:214078714720:web:b539bca0f32d82a437a405"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    room_name=localStorage.getItem("roomname");
    document.getElementById("room").innerHTML="Room name: "+room_name;
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}