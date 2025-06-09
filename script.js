console.log("Script loaded successfully!");
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded successfully!");

  // Your list of creative ideas
  const ideas = [
    "Paint something using only 3 colors.",
    "Write a haiku about your breakfast.",
    "Take a photo of something ordinary and make it look epic.",
    "Write a 2-minute monologue for a fictional villain.",
    "Design a logo for a made-up company.",
    "Create a comic strip with stick figures.",
    "Build a tiny sculpture using household items.",
    "Write a short story that starts with 'It was a dark and stormy night...'"
  ];

  // Track which ideas have not been shown yet
  let remainingIdeas = [...ideas];

  function getRandomIdea() {
    if (remainingIdeas.length === 0) {
      remainingIdeas = [...ideas]; // Reset when all ideas have been used
    }

    const index = Math.floor(Math.random() * remainingIdeas.length);
    return remainingIdeas.splice(index, 1)[0]; // Remove and return unique idea
  }

  // Get DOM elements
  const ideaBtn = document.getElementById("idea-btn");
  const ideaBox = document.getElementById("idea-box");

  // Add click event listener
  ideaBtn.addEventListener('click', () => {
    console.log('Button clicked, generating new idea...');
    const randomIdea = getRandomIdea();

    // Update content
    ideaBox.textContent = randomIdea;

    // Animate fade-in
    ideaBox.classList.remove('fade-in');
    void ideaBox.offsetWidth; // trigger reflow
    ideaBox.classList.add('fade-in');

    console.log(`Random idea selected: ${randomIdea}`);
    console.log("IdeaBox updated");
  });

  // Add save functionality
  const saveBtn = document.getElementById("save-btn");

  saveBtn.addEventListener('click', () => {
    const currentIdea = ideaBox.textContent;
    let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];
    if (!savedIdeas.includes(currentIdea)) {
      savedIdeas.push(currentIdea);
      localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
      alert("Idea saved!❤️");
    } else {
      alert("This idea is already saved!💀");
      console.log("Idea already exists in saved list.");
    }
  });
});
