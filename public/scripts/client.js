/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1544666010224
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense, donc je suis"
    },
    "created_at": 1544666010225
  }
];


$(document).ready(function() {
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
      console.log($tweet);
    }
  };

  $('form').submit(function(event) {
    event.preventDefault(); // Prevent refresh behavior

    // Serialize the form data
    const formData = $(this).serialize();
    const tweetContent = $(this).find('textarea[name="text"]').val();

    // Data validation
    if (!tweetContent) {
      alert('Tweet content cannot be empty');
      return;
    }

    if (tweetContent.length > 140) {
      alert('Tweet content exceeds the maximum limit of 140 characters');
      return;
    }

    // Send an AJAX POST request to the server
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/tweets',
      data: formData           //Use the jQuery library to submit a POST request that sends the serialized data to the server
    })
    .then(function(response) {            // Handle the response from the server if needed
      console.log('Tweet submitted successfully:', response);
    });
  });

  const loadTweets = function() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8080/tweets',
      dataType: 'json'
    })
    .then(function(response) {
      console.log('Tweets loaded successfully:', response);
      renderTweets(response);
    });
  };

  loadTweets();          // Call the loadTweets function to load tweets on page load

  const createTweetElement = function(tweet) {
    const timePassed = timeago.format(tweet.created_at);
    const $tweet = $(`
      <article class="tweet">
        <header>
          <img src="${tweet.user.avatars}">
          <h2>${tweet.user.name}</h2>
          <span class="handle">${tweet.user.handle}</span>
        </header>
        <div class="content">
          <p>${tweet.content.text}</p>
        </div>
        <footer>
          <p>${timePassed}</p>
        </footer>
      </article>
    `);

    return $tweet;
  };
});
