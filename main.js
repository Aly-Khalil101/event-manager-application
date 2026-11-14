function setMinDate() {
  const today = new Date().toISOString().split("T")[0];
  const eventDate = document.querySelector(".event-date");
  eventDate.min = today;

  eventDate.addEventListener("blur", () => {
    if (eventDate.value < today) {
      eventDate.value = today;
    }
  });
}

setMinDate();

function addEvent() {
  const eventNameValue = document.querySelector(".event-name").value;
  const eventDateValue = document.querySelector(".event-date").value;
  const eventOrganizerValue = document.querySelector(".organizer").value;
  // Get Time in Miiliseconds From Epoch Time To Event Date
  const eventTimeStamp = new Date(eventDateValue).getTime();
  if (eventNameValue && eventDateValue && eventOrganizerValue) {
    //   Create event object :
    const event = {
      name: eventNameValue,
      date: eventDateValue,
      organizer: eventOrganizerValue,
      timeStamp: eventTimeStamp,
    };

    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));
    console.log(events);

    const input = document.querySelectorAll("input");

    input.forEach((input) => {
      input.value = "";
    });
    displayEvents();
  } else {
    alert("Please fill all fields");
  }
}

function displayEvents() {
  const events = JSON.parse(localStorage.getItem("events")) || [];
  const eventsList = document.querySelector(".events");
  eventsList.innerHTML = "";
  events.forEach((event, index) => {
    const now = new Date().getTime();
    const timeLeft = event.timeStamp - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    eventsList.innerHTML += `
      <div class="event">
        <h3>${event.name}</h3>
        <p>
          <span>By:</span>${event.organizer}
        </p>
        <p>
          <span>On:</span>${event.date}
        </p>
        <p>
          <span>Time left:</span>${countdown}
        </p>
        <button class="btn-press" onclick="deleteEvent(${index})">Delete</button>
      </div>
    `;
  });
}

displayEvents();

function deleteEvent(index) {
  const events = JSON.parse(localStorage.getItem("events"));
  events.splice(index, 1);
  localStorage.setItem("events", JSON.stringify(events));
  displayEvents();
}

setInterval(displayEvents, 1000);
