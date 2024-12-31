document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.getElementById("fallingH1");
  const text = h1.textContent;

  // Clear the h1 element
  h1.textContent = "";

  // Loop through each character in the text
  text.split("").forEach((char, index) => {
    const span = document.createElement("span"); // Create a new span element
    span.classList.add("letter"); // Add the "letter" class to the span
    if (char === " ") {
      span.classList.add("space"); // Optionally, you can add a class for spaces
      span.textContent = "\u00A0"; // Use non-breaking space for proper spacing
    } else {
      span.textContent = char; // Set the text of the span to the current character
    }
    h1.appendChild(span); // Append the span to the h1

    // Add a delay based on the index
    span.style.animationDelay = `${index * 0.3}s`; // Delay increases by 0.1s for each letter
  });
});
