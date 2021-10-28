(function () {
	function setTitle(searchTerm) {
		const el = document.querySelector("[data-search-term]");
		if (el) el.textContent = `"${searchTerm}"`;
	}
	function setControlValue(searchTerm) {
		const el = document.querySelector("[data-search-control] > input");
		if (el) el.value = searchTerm;
	}
	function renderList(results, title) {
		if (!results.length) return document.createElement("span");

		const template = document.querySelector("template[data-result-list-item]");
		const children = results.map((res) => {
			const node = template.content.firstElementChild.cloneNode(true);
			node.querySelector("h3").textContent = res.name;
			node.querySelector("a").href = res.url;
			node
				.querySelector("[type=svg]")
				.setAttribute("description", res.description);
			node.querySelector("svg").setAttribute("title", res.description);
			node.querySelector("svg title").textContent = res.description;
			node
				.querySelector("svg use")
				.setAttribute("xlink:href", `/assets/svg/map.svg#${res.ID}`);

			return node;
		});

		const container = document
			.querySelector("template[data-result-list]")
			.content.firstElementChild.cloneNode(true);
		container.querySelector("[data-title]").textContent = title;
		container.querySelector("[data-count]").textContent = `(${results.length})`;
		container.querySelector("ul").replaceChildren(...children);

		return container;
	}
	function renderTable(results, title, description) {
		if (!results.length) return document.createElement("span");

		const template = document.querySelector("template[data-result-table-row]");
		const children = results.map((res) => {
			const node = template.content.firstElementChild.cloneNode(true);
			node.querySelector("a").textContent = res.name;
			node.querySelector("a").href = res.url;
			return node;
		});

		const container = document
			.querySelector("template[data-result-table]")
			.content.firstElementChild.cloneNode(true);
		container.querySelector("[data-title]").textContent = title;
		container.querySelector("[data-description]").textContent = description;
		container.querySelector("[data-count]").textContent = `(${results.length})`;
		container.querySelector("tbody").replaceChildren(...children);

		return container;
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

				const results = FuseSearch.search(searchTerm);

				const released = renderList(
					results.filter((r) => r.state === "published"),
					"Released"
				);
				const inProgress = renderTable(
					results.filter((r) => r.state === "inprogress"),
					"In Progress",
					"A table of components that are in progress of development."
				);
				const suggestion = renderTable(
					results.filter((r) => r.state === "suggestion"),
					"Suggestion",
					"A table of components that have been suggested, including their status."
				);

				document
					.querySelector("[data-search-results]")
					.replaceChildren(released, inProgress, suggestion);
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
	}

	init();
})();
