/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// clean representation:
// $('<div/>', {
//   'id':'myDiv',
//   'class':'myClass',
//   'text':'Text Only',
// }).on('click', function(){
//   alert(this.id); // myDiv
// }).appendTo('body');

// most efficient way to create HTML elements with jquery:
//$(document.createElement('div'));

$(document).ready(function () {

  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };

  const createTweetElement = function(tweet) {
    let $tweet = $(`<article class="tweet-container">
  <header class="tweet-header" >
    <div class="header-left-content">
      <img src="/images/profile-hex.png" />
      <p class="name">${tweet.user.name}</p>
    </div>
    <p class="handle">${tweet.user.handle}</p>
  </header>
  <div class="character-content" >
    <p>${tweet.content.text}</p>
  </div>
  <hr/>
  <footer class="tweet-footer">
    <p class="timestamp">${tweet.created_at}</p>
    <p class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </p>
  </footer>
  </article>`);

    return $tweet;
  };
  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  // creating easy to read/type/understand variable names
  // how I had it last time:
  // const $tweetBox = $("#tweet-text");
  // const tweetBox = $(document.getElementById("#tweet-text"));

  // const renderTweets = function(tweets) {
  //   // loops through tweets
  //   // calls createTweetElement for each tweet
  //   // takes return value and appends it to the tweets container
  //   // .appendTo or .append
  // }

  // renderTweets(data);

  $tweetBox.on("submit", function () {
    event.preventDefault();

    // pseudo code: all the following data needs to be captured and stored from a tweet:
    // user: name, avatar, handle
    // content: text
    // timestamp
  });
});
