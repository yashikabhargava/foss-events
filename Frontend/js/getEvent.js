// Fetch data from events.json file
fetch("../data/events.json")
  .then((res) => res.json())
  .then((res) => {
    let cardContainer = document.getElementsByClassName("card-container")[0];
    for (let data in res) {
      let eventCard = document.createElement("div");
      eventCard.className = "event_card";
      let eventTitle = document.createElement("div");
      eventTitle.className = "event_title";
      let heading = document.createElement("h3");
      heading.innerText = res[data].title;
      eventTitle.appendChild(heading);
      let eventDetails = document.createElement("div");
      eventDetails.className = "event_details";
      let eventLink = document.createElement("a");
      Object.assign(eventLink, {
        href: `https://${res[data].website}`,
        target: "_blank",
        rel: "noopener noreferrer",
      });
      let link = document.createElement("h6");
      link.innerText = "Go to websiteinde";
      eventLink.appendChild(link);
      let date = document.createElement("p");
      date.innerText = res[data].date;
      let eventDescription = document.createElement("p");
      eventDescription.innerHTML = `<b>Description:</b> ${res[data].description}`;

      eventDetails.append(eventLink, date, eventDescription);
      eventCard.append(eventTitle, eventDetails);
      cardContainer.appendChild(eventCard);
    }
  });
