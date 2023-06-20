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
    "created_at": 1461116232227
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
    "created_at": 1461113959088
  }
];

$(document).ready(function() {

const renderTweets = function(tweets) {
  for (const tweet of tweets) {                    // loops through tweets
    const $tweet = createTweetElement(tweet);     // calls createTweetElement for each tweet
    $('#tweets-container').append($tweet);       // takes return value and appends it to the tweets container
    console.log($tweet);
  }
};

$('form').submit(function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = $(this).serialize();

  // Send an AJAX POST request to the server
  $.ajax({
    method: 'POST',
    url: 'http://localhost:8080/tweets', 
    data: formData
  })
  .(function(response) {
    // Handle the response from the server if needed
    console.log('Tweet submitted successfully:', response);
  })
});

const createTweetElement = function(tweet) {
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
        <p>${tweet.created_at}</p>
      </footer>
    </article>
  `);

  return $tweet;
};

renderTweets(data);
})