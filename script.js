console.log("Script loaded successfully!");
// This script generates a random creative idea from a predefined list

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

const ideaBtn = document.getElementById("idea-btn");
const ideaBox = document.getElementById("idea-box");

ideaBtn.addEventListener('click', () => {
    console.log('Button clicked, generating new idea...');
    const randomIndex = Math.floor(Math.random() * ideas.length);
    console.log(`Random index generated`);
  const randomIdea = ideas[randomIndex];
    console.log(`Random idea selected`);
  ideaBox.textContent = randomIdea;
    console.log("IdeaBox. updated");

    // Reset and apply fade-in effect

  ideaBox.classList.remove('fade-in');
    void ideaBox.offsetWidth; 
    ideaBox.classList.add('fade-in');
});


