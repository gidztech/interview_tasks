# Butternut Box Engineering Tasks

![alt text](https://res.cloudinary.com/ldhg5acsz/image/upload/Web/photos/logos/butternut-logo-top.png)

This repository hosts documentation and starter code for the coding tasks we use in the Engineering team interview process at Butternut Box. These tasks are designed to resemble features we would build as part of our day-to-day, so that you can get a sense of what it's like here.

Start by reading the appropriate prompt below. Then, you can clone the folder which includes some boilerplate code to help you get started with your task. Feel free to edit as much as you want, use the tools that are set up (or not) or even start from scratch if you prefer. We'd love to hear any questions or comments you might have in the process.

### [View the Calendar Task (for Front-End candidates)](#calendar-task)

### [View the Phone Number Task (for Full-Stack candidates)](#phone-number-task)

## Calendar Task

### Introduction

During our signup process, it's important to us that customers are able to select their preferred delivery date so they see how flexible the service we offer is. This step is done on our checkout, and is composed of a pre-selected date (Which is the earliest available delivery), and a prompt to allow them change it. Clicking on this prompt opens up a modal that allows them select a new date for delivery. We'd like you replicate some of this functionality for us.

### Task

We’d love for you to create a simple calendar view outlined in the PDF attached below in React and CSS, similar to the approach we take on checkout. As we've outlined in the image below, the initial state should be a button that opens a modal with a background overlay greying out the background. Once clicked, a modal should animate in, and I should then be able to adjust my delivery date to another 'deliverable' date. Clicking on the 'change date' button, 'cancel, don't change' button, or the background, should close the modal after saving the user option if appropriate.

The dates listed should the current month. You should correctly dynamically handle the start date and end date of the month being any day of the week.

Some notes:

1. We’re keen to ensure that it’s a collaborative effort - feel free to check in regularly to
discuss any aspect of the project.
2. The modal should only be rendered on the page (added to the DOM) when open. We don't want extra HTML nodes hanging around on the page when it's closed. Think about how this might impact the animation of the item.
3. Further animation beyond the opening and closing of the modal and any other ideas you have to improve the user experience and show off your attention to detail would be a great bonus!
4. You can only select one date at a time in the calendar.
5. You are free to use animation libraries, within reason.
6. The date in the calendar icon in the closed state should be dynamic and reflect the selected date.

### UI Design

![alt text](calendar_task/task.png)

### Tooling

We've set up a basic Create React App (see each project's README for more details). We've also set up TypeScript and Sass as tools that you can use,
but feel free to adjust if you prefer a different setup.


### Other notes

- We've included some assets that you'll need such as SVGs, fonts, and our colours. We're interested in seeing how you organise the project's folder
structure so we've left that up to you.

- Comments and documentation are always appreciated as part of the submission.


## Phone Number Task

## Introduction

We collect a customer's phone number on checkout so that we can send them SMS messages to remind them that their order is coming, and and other useful information about their delivery. We use Twilio to send the actual messages, and Twilio require the phone number to be formatted correctly before being sent to Twilio, including the +44 prefix.

On checkout, customers are able to input their phone number in any of the following formats:

- +447...
- 447...
- 07....

UK mobile phone numbers are **11 digits long** when in the 07... format (There are some exceptions, but you can ignore them), and always have a 7 after the prefix (whether it's +44, 44 or 0).

## Task

Your job is to build a simple frontend component that allows the user enter their phone number, and a submit button that submits the phone number to a Rails API for formatting and preparation for communication with Twilio.

- **The frontend component should support the following:**
    - A high fidelity design (See image below) - we are keen to see a design that matches that design exactly.
    - Error states and frontend validation & formatting.
        - I should be told if I input an incorrect number like 0634343
        - If I input 07123456789, it should be automatically formatted in realtime to 07123 456789
        - If I input +447123456789, it should be automatically formatted in realtime to +44 7123  456789
    - Upon submitting a valid form, it should fire off a request to the Rails API
    - This should all be done in React ideally, but we will consider Angular and Vue.js submissions as well.
- **The Rails API should support the following:**
    - Sensible REST routing patterns and sensible param definitions.
    - Built in validation (Don't assume our frontend has validated the phone numbers correctly. Return sensible error codes and messages if these fail).
    - Tests using RSpec or Minitest
    - You cannot use any libraries to aid the implementation or testing of this class outside of RSpec and the standard Rails libraries.
- Finally, we love clear code that is aided with comments and documentation - talk us through what you are doing and how you approached the problem - that helps us understand how you found the task.

We are conscious of your time so don't want you spending more than 2.5-3 hours on this project. If you reach that point in time without having completed the task, feel free to submit the task as is with an explainer of what you got done.

## Resources

### High Fidelity Designs

Note that all these designs are available in similar form on our live site if you follow through to checkout.

**Initial state:**

![alt text](https://ibb.co/Wt6m4Lt)

**Valid State:**

![alt text](https://ibb.co/NmQ9qys)

Note how the 'Your mobile number' moves to the top - this should be animated.

**Invalid State:**

![alt text](https://ibb.co/Wt6m4Lt)

### Icons

We've provided you the following icons within `app/assets/images`:

- Green checkmark

- Mobile icon

- Info icon

- Red cross

### Colours


We've included our brand and support colours in `app/assets/stylesheets/brand-colours.sass`

Blue (Primary): #1e5d84

Blue (Lighter Shade): #5d92b8

Pink: #f2c4c4

Red: #d2322e

Grey (Lighter i.e Background): #f7f5f3

Grey (Darker i.e Text): #9c9896

### Fonts

Button Title: GT Pressura Mono

Everything else: GT Pressura Regular

Fonts can be found in `app/assets/fonts` and `app/assets/stylesheets/fonts.sass`
