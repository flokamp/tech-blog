function openTab(tabName) {
	var i;
	var x = document.getElementsByClassName("form");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";
}

async function loginFormHandler(event) {
	event.preventDefault();

	const email = document.querySelector("#email-login").value.trim();
	const password = document.querySelector("#password-login").value.trim();

	if (email && password) {
		const response = await fetch("/api/users/login", {
			method: "post",
			body: JSON.stringify({
				email,
				password,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/dashboard/");
		} else {
			alert(response.statusText);
		}
	}
}

async function signupFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector("#username-signup").value.trim();
	const email = document.querySelector("#email-signup").value.trim();
	const password = document.querySelector("#password-signup").value.trim();
	const avatar = document
		.querySelector('input[name="avatar-signup"]:checked')
		.value.trim();

	if (username && email && password && avatar) {
		const response = await fetch("/api/users", {
			method: "post",
			body: JSON.stringify({
				username,
				email,
				password,
				avatar,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/dashboard/");
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector(".login-form")
	.addEventListener("submit", loginFormHandler);

document
	.querySelector(".signup-form")
	.addEventListener("submit", signupFormHandler);
