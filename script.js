console.log("Script loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded!");

  // DOM elements

  const ideaBtn = document.getElementById("idea-btn");
  const ideaBox = document.getElementById("idea-box");
  const saveBtn = document.getElementById("save-btn");
  const saveMessage = document.getElementById("save-message");
// List creative ideas
  const ideas = [
    "Paint something using only 3 colors.",
    "Write a haiku about your breakfast.",
    "Take a photo of something ordinary and make it look epic.",
    "Write a 2-minute monologue for a fictional villain.",
    "Design a logo for a made-up company.",
    "Create a comic strip with stick figures.",
    "Build a tiny sculpture using household items.",
    "Write a short story that starts with 'It was a dark and stormy night...'",
    "Make a playlist of songs that describe your mood today.",
    "Draw a map of an imaginary place.",
    "Invent a new sport and describe its rules.",
    "Create a recipe using only 5 ingredients.",
  ];
// Keep track of unused ideas to prevent immediate repeats
  let remainingIdeas = [...ideas];
// Function to get a random, non-repeating idea
  function getRandomIdea() {
    if (remainingIdeas.length === 0) {
      remainingIdeas = [...ideas];
    }

    const index = Math.floor(Math.random() * remainingIdeas.length);
    return remainingIdeas.splice(index, 1)[0];
  }
// Event listeners for the "get idea" button
  ideaBtn.addEventListener("click", () => {
    const randomIdea = getRandomIdea(); 
    ideaBox.textContent = randomIdea;
    ideaBox.classList.add("show");
  });
// Event listener for the "save idea" button
  saveBtn.addEventListener("click", () => {
    const currentIdea = ideaBox.textContent;
    let savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];
// Save idea only if it's not already saved
    if (!savedIdeas.includes(currentIdea)) {
      savedIdeas.push(currentIdea);
      localStorage.setItem("savedIdeas", JSON.stringify(savedIdeas));
      saveMessage.textContent = "Idea saved! ❤️";
    } else {
      saveMessage.textContent = "This idea is already saved! 💀";
      console.log("Idea already exists in saved list.");
    }

    // Show the message temporarily
    saveMessage.style.display = "block";

    // Hide it after 2 seconds
    setTimeout(() => {
      saveMessage.style.display = "none";
    }, 2000);
  });
});
