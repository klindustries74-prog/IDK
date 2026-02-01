let players = [];
let currentPlayer = 0;
let secretWord = "";

function startGame() {
  const count = Number(document.getElementById("playerCount").value);
  secretWord = document.getElementById("secretWord").value.trim();

  if (!secretWord || count < 2) {
    alert("Please enter a word and at least 2 players.");
    return;
  }

  players = Array(count).fill(secretWord);
  const imposterIndex = Math.floor(Math.random() * count);
  players[imposterIndex] = "IMPOSTER";

  currentPlayer = 0;

  document.getElementById("setup").classList.add("hidden");
  showPassScreen();
}

function showPassScreen() {
  document.getElementById("passPlayer").textContent = currentPlayer + 1;
  hideAll();
  document.getElementById("pass").classList.remove("hidden");
}

function ready() {
  hideAll();
  document.getElementById("playerTitle").textContent =
    `Player ${currentPlayer + 1}`;
  revealRole();
  document.getElementById("reveal").classList.remove("hidden");
}

function revealRole() {
  const roleBox = document.getElementById("role");
  const role = players[currentPlayer];

  roleBox.className = "role";

  if (role === "IMPOSTER") {
    roleBox.textContent = "😈 YOU ARE THE IMPOSTER";
    roleBox.classList.add("imposter");
  } else {
    roleBox.textContent = `✅ Word: ${role}`;
    roleBox.classList.add("word");
  }
}

function hideRole() {
  currentPlayer++;

  if (currentPlayer >= players.length) {
    hideAll();
    document.getElementById("end").classList.remove("hidden");
  } else {
    showPassScreen();
  }
}

function resetGame() {
  players = [];
  currentPlayer = 0;
  secretWord = "";

  document.getElementById("secretWord").value = "";
  document.getElementById("playerCount").value = 4;

  hideAll();
  document.getElementById("setup").classList.remove("hidden");
}

function hideAll() {
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("pass").classList.add("hidden");
  document.getElementById("reveal").classList.add("hidden");
  document.getElementById("end").classList.add("hidden");
}
