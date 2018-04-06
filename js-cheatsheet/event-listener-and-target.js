//Get link element and listen to click event
document.querySelector('.clear-tasks').addEventListener('click', function(e) {
   console.log('Hello World');

   //Prevent default
   e.preventDefault();
});

//Get link element and listen for click event with custom callback function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

//Custom callback function
function onClick(e) {
  
  let val;

  //e is Event Object with a tons of information
  val = e;

  // Event target element
  // Target returns the "clicked" element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}