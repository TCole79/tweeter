$(document).ready(function() {
  //console.log("Ready");

  const $tweetBox = $("#tweet-text");
  // const $textarea = $("#textarea");

  //Using jQuery and an appropriate selector, register an event handler to the textarea element for the form inside of the .new-tweet section.
  
  $tweetBox.on("input", function() {
    // console.log(this.value.length);
    // your code here

    // pseudo as person enters characters, count them and make sure they stay within the limit
    let count = $(this).val().length;
    //console.log(count);
    //pseudo total left = total - actual entered (count)
    let workingValue = 140 - count;
    //console.log(workingValue);
    // if (workingValue > 140) {

    // }
    // traverse the dom from our this / siblings / parents /
    let counter = $(this).siblings("div").children("output");
    console.log(counter);
    counter.text(workingValue);

    if (workingValue < 0) {
      counter.css("color", "red");
    } else counter.css("color", "#545149");
    // Adjust your code so the counter turns red when invalid
    // pseudo code - if character count is invalid, disable the ability to tweet and make character count go negative

    // If users exceed the 140 character limit, the counter should appear red, as shown in the following GIF:
    // pseudo code = if (something > 140) { change counter colour to red }
  });


});


// creates an event listener for the 'document' node
// document.addEventListener("click", () => {
//   console.log("You just clicked somewhere on this page.");
// });


// Let's say you wanted to only listen for clicks on a specific node of the page (e.g. <div class="div-one"> from the html above):

// // specify the DOM node to reference using the document.getElementById method and put that reference in a variable
// const div1 = document.getElementById("div-one");

// // when div1 is clicked, run the function
// div1.addEventListener("click", () => {
//   console.log("You clicked on div 1.");
// });

// The event will fire only when you click on div-one.