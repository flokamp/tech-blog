async function reactionFormHandler(event) {
	event.preventDefault();

	const reaction_text = document.querySelector('button[id="$id"]').id;
	const post_id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];
	console.log(reaction_text);
	if (reaction_text) {
		const response = await fetch("/api/reactions", {
			method: "POST",
			body: JSON.stringify({
				post_id,
				reaction_text,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector(".reaction-form")
	.addEventListener("submit", reactionFormHandler);
