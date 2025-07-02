export function archivePastEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  document.querySelectorAll("[data-event-date]").forEach(el => {
    const eventDate = new Date(el.dataset.eventDate);
    if (eventDate < today) {
      el.classList.add("archived");

      const h3 = el.querySelector("h3");
      if (h3) {
        const notice = document.createElement("p");
        notice.className = "highlight";
        notice.innerHTML = "<i>This event has passed.</i>";
        h3.insertAdjacentElement("afterend", notice);
      }
    }
  });
}
