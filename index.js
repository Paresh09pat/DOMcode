// Q.1 )  Write the code to access element which is having id as "text"

let text = document.getElementById("#text");


// Q.2 )  Write the code to access element which is having tag as "h1"

let Tag = document.getElementsByTagName("h1")


// Q.3 ) Write the code to access element which is having class as "box"

let Class = document.getElementsByClassName(".box")


// Q.4 ) <h1> Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"


function change(){
    
    document.getElementsByTagName("h1")[0].innerText = 'Hello World !!';
}


// Q.5 ) Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction".
// When user clicks on this button, the cards arrangement should be changed to vertical direction.


function changeText(){

    const one = document.getElementById("cards");
    one.style.flexDirection = "column";

    const two = document.getElementsByClassName("cardOne");
    two[0].style.backgroundColor= "aqua";

    const three = document.getElementsByClassName("cardTwo");
    three[0].style.backgroundColor = "red"

    const four = document.getElementsByClassName("cardThree");
    four[0].style.backgroundColor= "pink";
    
}  


// Q.6 ) What’s the difference between window vs document?

// Window - i) It is the root level element in any web page.
//         ii) All the global variable are defined in the window object.
// For example : alert(), confirm() are methods defined on the window object.

// Document - i) It is the direct child of the window object. It is aka Document Object Model (DOM)
//           ii) You can access it via window.document or document.
//          iii) document object has many useful methods defined on it-
// For example : document.getElementById()
//               document.querySelector()
//               document.createElement()



// Q.7) <h1> Hello </h1>
// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let head = document.createElement("h1");
head.innerText = "Hello";
document.querySelector("body").appendChild(head);
head.setAttribute("id", "heading");
document.getElementById("heading").style.color = "red";


// Q.8) Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function rao(){
   document.getElementById("changeText").innerText= "Welcome to Elevation academy";
}


// Q.9) Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.


function startTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0){
        h = 12;
    }

    if (h>12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    

    let time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("txt").innerText = time;
    document.getElementById("txt").textContent = time;

    setTimeout(startTime, 1000);
    }

    startTime();


// Q.10) Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function hello(){
    selectElement = document.querySelector('#first');
    let output = selectElement.value;
    document.querySelector('#ee1').textContent = output;
}


// Q.11) Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"

const ages = document.getElementById("age")

