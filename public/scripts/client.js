/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const createTweetElement = function (tweet) {
    const $tweet = $(`<article class="tweet-container">
    <header class="tweet-header" >
      <div class="header-left-content">
        <img src="${tweet.user.avatars}" />
        <p class="name">${tweet.user.name}</p>
      </div>
      <p class="handle">${tweet.user.handle}</p>
    </header>
    <div class="character-content" >
      <p>${escape(tweet.content.text)}</p>
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

  // this is code to stop cross-scripting attacks
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function (tweets) {
    $("#tweets-container").html("");
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    }
  };

  const loadTweets = function () {
    $.ajax({
      url: "/tweets/",
      method: "GET",
    }).then((tweets) => {
      renderTweets(tweets);
    });
  };

  $("#tweet-form").submit(function(event) {
    event.preventDefault();

    const serialized = $(this).serialize();
    const length = $("#tweet-text").val().length;
    const error = $(".error-message");

    if (!length) {
      error.text("Your tweet cannot be empty.").slideDown("slow");
    } else if (length > 140) {
      error
        .text("Your tweet length cannot exceed 140 characters.")
        .slideDown("slow");
    } else {
      error.slideUp("slow");
      $.ajax({
        url: "/tweets/",
        method: "POST",
        data: serialized,
      }).then(() => {
        loadTweets();
      });
      $("form").trigger("reset");
    }
  });

  loadTweets();
});
