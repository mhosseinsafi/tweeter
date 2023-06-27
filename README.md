# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol' CSS3 that allows users to post and share short messages called tweets. It provides a platform for users to express their thoughts, ideas, and engage in conversations with others.

# Features

- Posting Tweets: Users can compose and submit tweets using a text area provided on the page. The tweets can be up to 140 characters long.

- Character Counter: The application includes a character counter that dynamically updates as the user types their tweet. It helps users keep track of the remaining characters available for their tweet.

- Tweet Validation: Before submitting a tweet, the application performs basic validation to ensure the tweet is not empty or exceeds the character limit.

- Displaying Tweets: The application dynamically displays the submitted tweets in a designated section of the page. Each tweet is shown with relevant information such as the author's username, timestamp, and the tweet content.

- Responsive Design: The web application is designed to be responsive, ensuring that it works well and provides a good user experience on different screen sizes and devices.

- Styling and Fonts: The application utilizes various fonts and styles to enhance the visual appearance and make it more appealing to users.

- Timeago Functionality: The application uses the timeago.js library to display relative timestamps for the tweets, making it easier to understand when a tweet was posted (e.g., "2 minutes ago," "1 day ago").

## Screenshots

!["Desktop View"](https://github.com/mhosseinsafi/tweeter/blob/master/docs/tweeter-Desktop.png?raw=true)
!["Mobile View"](https://github.com/mhosseinsafi/tweeter/blob/master/docs/tweeter-mobile.png?raw=true)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance,
- Express
- Md5  
- Timeago.js