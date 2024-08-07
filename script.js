document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");

  const fetchAdvice = () => {
    const box = document.querySelector(".box");
    box.innerHTML = "";

    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const advice = data.slip.advice;
        const id = data.slip.id;

        // Create new elements
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        // Set the text content of the elements
        h3.textContent = `"${advice}"`;
        p.textContent = `Advice #${id}`;

        // Append the elements to the box
        box.appendChild(p);
        box.appendChild(h3);
      })
      .catch((error) => console.error("Error fetching advice:", error));
  };

  // Call fetchAdvice when the button is clicked
  button.addEventListener("click", fetchAdvice);

  // Call fetchAdvice on page load
  fetchAdvice();
});