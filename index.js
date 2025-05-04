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

        const body = document.body;
        let lastTime = 0;                    // simple throttle

        window.addEventListener('mousemove', e => {
        const now = performance.now();
        if (now - lastTime < 25) return;   // ~40 hearts / sec max
        lastTime = now;

        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤';           // Unicode heart
        heart.style.left = `${e.pageX}px`;
        heart.style.top  = `${e.pageY}px`;

        // Optional ‘00s‑style randomness:
        heart.style.fontSize = (12 + Math.random() * 12) + 'px';
        heart.style.color    = `hsl(${Math.random()*360},90%,70%)`;

        body.appendChild(heart);
        heart.addEventListener('animationend', () => heart.remove());
        });

        typed = ""; // reset after triggering
    }
});