(function () {
	function setTitle(searchTerm) {
		const el = document.querySelector("[data-search-term]");
		if (el) el.textContent = `"${searchTerm}"`;
	}
	function setControlValue(searchTerm) {
		const el = document.querySelector("[data-search-control] > input");
		if (el) el.value = searchTerm;
	}
	function renderResults(results) {
		const template = document.querySelector("template[data-search-result-tpl]");
		const children = results.map((res) => {
			const node = template.content.firstElementChild.cloneNode(true);
			const link = node.querySelector("a")
			link.textContent = res.name;
			link.href = res.url;

			// Fill the
			node.querySelector('svg').setAttribute('title' , res.description);
			node.querySelector('svg title').textContent = res.description;
			node.querySelector('svg use').setAttribute('xlink:href', `/assets/svg/map.svg#${res.ID}`);

			return node;
		});

		const container = document.querySelector('template[data-result-section]').content.firstElementChild.cloneNode(true);
		container.querySelector('ul').replaceChildren(...children);

		document
			.querySelector("[data-search-results]")
			.replaceChildren(container);
	}
	function performSearch(searchTerm) {
		const el = document.querySelector("[data-search-index]");
		if (el) {
			try {
				const INDEX = JSON.parse(el.textContent);
				const FuseSearch = new Fuse(INDEX, {
					threshold: 0.2,
					keys: [
						{ name: "ID", weight: 0.5 },
						{ name: "tags", weight: 0.2 },
						{ name: "metatags", weight: 0.2 },
						{ name: "description", weight: 0.1 },
					],
				});
				renderResults(FuseSearch.search(searchTerm));
			} catch (error) {
				console.error("Failed to load search index", error);
			}
		}
	}

	function applySearch(searchTerm) {
		setTitle(searchTerm);
		setControlValue(searchTerm);
		performSearch(searchTerm);
	}

	function init() {
		// Show result content
		const params = new URLSearchParams(window.location.search);
		if (params.has("s")) {
			const searchTerm = params.get("s");
			applySearch(searchTerm);
		}

		// TODO: Take over the search form for client side changes
	}

	init();
})();
