let typed = "";

document.addEventListener("keydown", function(event) {
    typed += event.key.toLowerCase();

    // Keep it from growing forever
    if (typed.length > 20) {
        typed = typed.slice(-20); // only keep last 20 characters
    }

    // Check for secret codes
    if (typed.includes("shelby")) {
        document.getElementById('theme').href = "shelby.css";
        document.title = `${document.title} shelby edition`

        const music = document.getElementById('background-music');
        music.play(); // Play the hidden background music

        const ul = document.getElementById('members-list');
        const li = document.createElement('li');
        li.textContent = "Shelby (in spirit)";
        ul.appendChild(li);

        typed = ""; // reset after triggering
    }
});