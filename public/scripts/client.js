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
// $(document.createElement('div'));
// my prior example
// const tweetBox = $(document.getElementById("#tweet-text"));


$(document).ready(function() {

  const createTweetElement = function(tweet) {
    const $tweet = $(`<article class="tweet-container">
    <header class="tweet-header" >
      <div class="header-left-content">
        <img src="${tweet.user.avatars}" />
        <p class="name">${tweet.user.name}</p>
      </div>
      <p class="handle">${tweet.user.handle}</p>
    </header>
    <div class="character-content" >
      <p>${tweet.content.text}</p>
    </div>
    <hr/>
    <footer class="tweet-footer">
      <p class="timestamp">${timeago.format(tweet.created_at)}</p>
      <p class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </p>
    </footer>
    </article>`);

    return $tweet;
  };
  
  //const $tweet = createTweetElement(tweetData);
  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  const renderTweets = function(tweets) {
    $("#tweets-container").html(""); // look at this html method
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      let $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $("#tweets-container").append($tweet);
    }
  };
  
  // makes an ajax GET request to local server
  const loadTweets = function() { // is this correct?
    $.ajax({
      url: "/tweets/",
      method: "GET",
      
    }).then(
      (tweets) => {
      // pseudo code - display the tweet content with all associated data
        renderTweets(tweets);
      }
    );
  };
  
  //const $tweetButton = $("#tweet-button"); // make an easy to read/understand variable name
  
  $("#tweet-form").submit(function(event) {
    event.preventDefault();
    console.log('event test ', event); // does nothing as far as I can see
    
    const serialized = $("#tweet-text").serialize(); // Serialize form data (which I call 'tweet-text') and send to server as query string
    console.log('serialized test ', serialized);
    // Christian's example below I changed at the start
    $.ajax({
      url: "/tweets/",
      method: "POST",
      data: serialized,
    }).then(() => {
      // pseudo code - display the tweet content with all associated data
      loadTweets();

      // $("#tweet-text"). what goes here?
    });
  });
  
  
  
  
  
  loadTweets();
  //renderTweets($tweet); // this is not working now I removed the hard coded examples

});
