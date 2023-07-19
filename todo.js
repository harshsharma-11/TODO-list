var input = document.getElementsByTagName("input")[0];
var button = document.getElementById("add");
var todobox = document.getElementById("todolist");
var doneButton = document.getElementById("done"); // Reference the "Done" button
var deleteButton = document.getElementById("delete"); // Reference the "Delete" button

/****Random colours*** */
var array=["hsl(194, 84%, 30%)","red","green","rgb(124, 11, 128)","orange","hsl(51, 93%, 42%)","black","hsl(99, 82%, 43%)","hsl(268, 88%, 56%)","hsl(140, 88%, 20%)","hsl(214, 85%, 40%)"]
todobox.style.overflowY = "scroll";

button.addEventListener("click", inputCompleted);

function inputCompleted() {
  var text = input.value;
  if (!text) {
    showNotification("Task can't be empty");
  } else {
    addTodo(text);
  }
}

function addTodo(text) {
  var listItem = document.createElement("li");
  var todoText = document.createElement("span");
  todoText.innerText = text + "  ";

  listItem.style.fontSize = "30px";
  listItem.style.fontWeight = "700";
  listItem.appendChild(todoText);

 
 var doneButtonClone = doneButton.cloneNode(true);
  doneButtonClone.addEventListener("click", markAsDone);
  listItem.appendChild(doneButtonClone);


 var deleteButtonClone = deleteButton.cloneNode(true);
  deleteButtonClone.addEventListener("click", deleteItem);
  listItem.appendChild(deleteButtonClone);

  todobox.querySelector("ul").appendChild(listItem);

  /******STYLE TO DELETE BUTTON****** */
  Object.assign(deleteButtonClone.style, {
    position:"absolute",
    right:"1vh",

  });
  
  /******STYLE TO DONE BUTTON****** */
  
  Object.assign(doneButtonClone.style, {
    position:"absolute",
    right:"15vh",

  });
  
  /******STYLE TODO LIST ITEM****** */
  
  Object.assign(listItem.style, {
    margin:"2vh",

  });



var x=Math.floor(Math.random() * array.length);

  /******STYLE TODO LIST text ITEM****** */
  
//random no. to choose ransom colour
var x=Math.floor(Math.random() * array.length);
  Object.assign(todoText.style, {
    display:"inline-block",
    width:"90vh",
    paddingRight:"5vh",
    color:array[x]

  });
  input.value = "";
}



/*************** REDO THE TASK ************** */

function Redo(event) {
  var listItem = event.target.parentElement;
  var doneButton = event.target;
  doneButton.innerText = "Done";
}



/*************** SHOW NOTIFICATION ************** */

function showNotification(text) {
  alert(text);
}




/*************** DELETE TASK ************** */

function deleteItem(event) {
  var listItem = event.target.parentElement;
  listItem.remove();
}




/*************** MARK AS DONE ************** */

function markAsDone(event) {
  var listItem = event.target.parentElement;
  var doneButton = event.target;
  
  var todoText=listItem.querySelector("span");
  if (doneButton.innerText === "Redo") {
    
    todoText.style.textDecoration = "none";
    Redo(event);
  } else {
    doneButton.innerText = "Redo";
    
        todoText.style.textDecoration = "line-through";
      
  }
}

  
// Fetch multiple to-do items from the API
/*
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 10; i++) {
      addTodo(data[i].title);
    }
  })
  .catch(error => {
    console.log("Error fetching to-do items:", error);
  });

*/