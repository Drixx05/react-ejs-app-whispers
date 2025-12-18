// Client-side JavaScript for Whispering app

document.addEventListener("DOMContentLoaded", () => {
	loadWhispers();
});

async function loadWhispers() {
	try {
		const response = await fetch("/api/v1/whisper");
		const whispers = await response.json();
		displayWhispers(whispers);
	} catch (error) {
		console.error("Error loading whispers:", error);
	}
}

function displayWhispers(whispers) {
	const container = document.getElementById("whispers-container");
	if (!container) return;

	container.innerHTML = whispers
		.map(
			(whisper) => `
        <div class="whisper">
            <p>${whisper.message}</p>
            <small>ID: ${whisper.id}</small>
        </div>
    `
		)
		.join("");
}
