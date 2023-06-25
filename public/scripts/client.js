/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json


$(document).ready(function() {

  const $errorMessages = $('#error-messages'); // Store error element in a variable
  
  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
      console.log($tweet);
    }
  };

  $('form').on('submit', function(event) {
    event.preventDefault(); // Prevent refresh behavior

    // Slide up the error element before validation
    $errorMessages.slideUp();

    // Serialize the form data
    const formData = $(this).serialize();
    const tweetContent = $(this).find('textarea[name="text"]').val();

    // Data validation
    if (!tweetContent) {
      showError('OoooooPPPss !! Tweet content cannot be empty');
      return;
    }

    if (tweetContent.length > 140) {
      showError('OoooooPPPss !! You have gone over 140 characters');
      return;
    }

    function showError(errorMessage) {
      $errorMessages.text(errorMessage); // Insert error message into the error element
      $errorMessages.slideDown(); // Slide down the error element with animation
    }

    // Send an AJAX POST request to the server
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/tweets',
      data: formData           //Use the jQuery library to submit a POST request that sends the serialized data to the server
    })
    .then(function(response) {            // Handle the response from the server if needed
      console.log('Tweet submitted successfully:', response);
      loadTweets();

    });
  });

  const loadTweets = function () {
    $.ajax({
      url: "/tweets",
      type: "GET",
      dataType: "json",
      success: function (tweets) {
        renderTweets(tweets);
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  };

  loadTweets();          // Call the loadTweets function to load tweets on page load

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    const timePassed = timeago.format(tweet.created_at);
    const $tweet = $(`
      <article class="tweet">
        <header>
        <div class="avaname">
          <img src="${tweet.user.avatars}">
          <h2 class="name">${tweet.user.name}</h2>
          </div>
          <span class="handle">${tweet.user.handle}</span>
        </header>
        <div class="content">
          <p class=underline-text>${escape(tweet.content.text)}</p>
        </div>
        <footer>
          <p>${timePassed}</p>
        </footer>
      </article>
    `);

    return $tweet;
  };
});

