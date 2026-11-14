# Event Manager Application

A simple Event Manager application built with HTML, CSS, and JavaScript. It allows users to create events, view their details, track the remaining time, and delete events.

🔗 **[Live Demo](https://aly-khalil101.github.io/event-manager-application/)**

## Features

- **Add Events:** Create events with a name, organizer, and date.
- **Date Validation:** Prevent selecting past dates.
- **Live Countdown:** Display the remaining days, hours, minutes, and seconds until each event.
- **Delete Events:** Remove events from the list.
- **Data Persistence:** Save events in the browser using `localStorage`, so they remain available after refreshing the page.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Browser `localStorage`

## JavaScript Concepts Practiced

While building this project, I practiced:

- DOM Manipulation
- Event Listeners
- Functions and Parameters
- Arrays and Objects
- `forEach()` and `splice()`
- JSON (`parse()` and `stringify()`)
- Local Storage
- Date Object and Timestamps
- Date Validation
- `setInterval()` for live countdown updates
- Dynamic HTML Rendering

## A Debugging Challenge I Faced

One of the biggest challenges I faced during this project was a JavaScript error:

```text
Uncaught TypeError: events.forEach is not a function
```

At first, I couldn't understand why `forEach()` wasn't working, even though I was retrieving the events from `localStorage`.

### Finding the Problem

I used `console.log()` and `Array.isArray()` to inspect the retrieved data:

```javascript
const savedEvents = JSON.parse(localStorage.getItem("events"));

console.log(savedEvents);
console.log(Array.isArray(savedEvents));
```

The result showed that the stored value was the string `"events"`, not an Array.

### Understanding the Cause

I learned that:

- `JSON.parse()` converts valid JSON into a JavaScript value, but it doesn't guarantee that the result will be an Array.
- The `|| []` operator only checks whether a value is truthy or falsy. It doesn't check its data type.
- A non-empty string is truthy, so `"events" || []` returns `"events"` instead of an empty Array.

Since the old stored value wasn't actual event data, I removed it:

```javascript
localStorage.removeItem("events");
```

After refreshing the page and adding a new event, the application worked correctly.

**What I learned:** Debugging isn't just about fixing an error. It's about inspecting values, understanding their types, and finding out why the code behaves differently from what I expected.

## Running the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/Aly-Khalil101/event-manager-application.git
```

2. Open the project folder.
3. Open `index.html` in your browser.

No additional dependencies or installation are required.

## What I Learned

This project helped me gain more practical experience with JavaScript, especially working with browser storage, handling dates, updating the DOM dynamically, and debugging unexpected errors.

It was another step forward in my JavaScript learning journey.
