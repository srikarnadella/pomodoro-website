# Pomodoro Clock and Quote Generator

This project combines a Pomodoro Clock with a Quote Generator, built using React. It allows users to manage their work or study sessions with timed intervals and provides inspirational quotes from an external API for motivation.

## Features

- **Pomodoro Clock:**
  - Customizable session and break lengths.
  - Start, pause, and reset functionality for the timer.
  - Automatic switching between session and break intervals.

- **Quote Generator:**
  - Fetches a new quote from an external API (API-Ninjas) with a button click.
  - Displays the quote along with its author dynamically.

## Technologies and Tools Used

- **React:** Front-end JavaScript library for building user interfaces.
- **Axios:** Promise-based HTTP client for making API requests.
- **CSS:** Custom styling for UI components, including responsiveness and visual appeal.
- **API:** Utilizes the API-Ninjas API to fetch inspirational quotes.

## Methods and Components

This project leverages React components to manage the Pomodoro Clock and Quote Generator functionalities:

### Component Details

- **App Component:**
  - Manages overall state including session length, break length, and timer intervals.
  - Controls the interaction between `BreakInterval`, `SessionLength`, `Timer`, and `QuoteGenerator` components.

- **BreakInterval Component:**
  - Handles UI for adjusting break length.
  - Provides buttons for increasing and decreasing break duration.

- **SessionLength Component:**
  - Manages UI for adjusting session length.
  - Includes buttons for increasing and decreasing session duration.

- **Timer Component:**
  - Implements countdown logic for session and break intervals.
  - Provides controls for starting, stopping, and resetting the timer.

- **QuoteGenerator Component:**
  - Fetches quotes from the API-Ninjas API.
  - Displays fetched quotes and authors dynamically.

### Development

This project emphasizes clean React component structure and state management. Key methods include:

- **State Management:**
  - Uses React state to manage session length, break length, timer state, and fetching quotes.

- **Event Handling:**
  - Implements event handlers for adjusting session and break lengths, starting/stopping the timer, and fetching new quotes.


### Acknowledgments

- Special thanks to API-Ninjas for providing the quote API.
- Inspired by the Pomodoro Technique for time management.
