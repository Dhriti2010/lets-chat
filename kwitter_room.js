
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDiYTYy8IjdGmYogGngnkIMmxre31iftFw",
      authDomain: "kwitter-11c6f.firebaseapp.com",
      databaseURL: "https://kwitter-11c6f-default-rtdb.firebaseio.com",
      projectId: "kwitter-11c6f",
      storageBucket: "kwitter-11c6f.appspot.com",
      messagingSenderId: "586266378365",
      appId: "1:586266378365:web:51685515f3fd88f941f114"
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

      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");window.location="index.html";
}