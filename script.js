const path = document.getElementById("wave"); // svg path
const scoreEl = document.getElementById("score"); // displays the number

let t = 0; // time offset
let score = 70;
let direction = 1; // controls up&down

function generateWave() {
  let d = "M 0 20 "; // start here

  for (let x = 0; x <= 120; x += 2) {
    let y =
      20 +
      Math.sin((x + t) * 0.08) * 6 +   // main motion
      Math.sin((x + t) * 0.2) * 2 +     
      Math.sin((x + t) * 0.03) * 4;    // makes the wave slower

    d += `L ${x} ${y} `;
  }

  path.setAttribute("d", d); // updates svg
}

function updateScore() {
  score += direction * 0.01; // smooth change

  if (score >= 99) direction = -1; // flips  the numbers
  if (score <= 70) direction = 1;

  scoreEl.textContent = Math.round(score); // show int
}

function animate() {
  t += 1.2; // move wave
  generateWave();
  updateScore();
  requestAnimationFrame(animate); // loop
}

animate(); // start

// form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {

    const email = document.querySelector('input[name="email"]').value.trim(); // get email
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (message.length < 10) {
        e.preventDefault(); // stop submit
        alert("Message must be at least 10 characters.");
    }

    if (!email.includes("@")) { // basic check
        e.preventDefault();
        alert("Enter a valid email.");
    }
});