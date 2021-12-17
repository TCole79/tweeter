$(document).ready(function() {

  const $tweetBox = $("#tweet-text");

  $tweetBox.on("input", function() {

    let count = $(this).val().length;
    let workingValue = 140 - count;

    // traverse the dom from our this / siblings / parents /
    let counter = $(this).siblings("div").children("output");
    console.log(counter);
    counter.text(workingValue);

    if (workingValue < 0) {
      counter.css("color", "red");
    } else counter.css("color", "#545149");

  });
});