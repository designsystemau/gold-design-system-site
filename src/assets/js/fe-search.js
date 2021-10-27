(function () {
	const params = new URLSearchParams(window.location.search);
	if (params.has('s')) {
		const searchTerm = params.get('s');
		document.querySelector('[data-searchTerm]').textContent = `"${searchTerm}"`;
	}
})()
