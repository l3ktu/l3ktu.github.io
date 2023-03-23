function submitForm(event) {
	event.preventDefault();
	const username = document.getElementById("faceitUsername").value;
	window.location.href = `/players/${username}`;
}