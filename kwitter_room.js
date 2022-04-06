
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("username").innerHTML="Welcome "+username+" !";
    function addroom(){
          roomname=document.getElementById("roomname").value;
          firebase.database().ref("/").child(roomname).update({
                purpose:"addingroomname"
          });
          localStorage.setItem("roomname",roomname);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
            //End code
            });});}
      getData();
      function redirecttoroomname(name){
            console.log(name);
            localStorage.setItem("roomname",name);
            window.location="kwitter_page.html"
      }
     
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");window.location="index.html";
}