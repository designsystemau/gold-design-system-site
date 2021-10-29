(function () {
	function setTitle(searchTerm) {
		const el = document.querySelector('[data-search-term]');
		if (el) el.textContent = `"${searchTerm}"`;
	}
	function setControlValue(searchTerm) {
		const el = document.querySelector('[data-search-control] > input');
		if (el) el.value = searchTerm;
	}
	function setSearchResults(nodes) {
		document.querySelector('[data-search-results]').replaceChildren(...nodes);
	}
	function renderList(results, title) {
		if (!results.length) return document.createElement('span');

		const template = document.querySelector('template[data-result-list-item]');
		const children = results.map((res) => {
			const node = template.content.firstElementChild.cloneNode(true);
			node.querySelector('h3').textContent = res.name;
			node.querySelector('a').href = res.url;
			node
				.querySelector('[type=svg]')
				.setAttribute('description', res.description);
			node.querySelector('svg').setAttribute('title', res.description);
			node.querySelector('svg title').textContent = res.description;
			node
				.querySelector('svg use')
				.setAttribute('xlink:href', `/assets/svg/map.svg#${res.ID}`);

			return node;
		});

		const container = document
			.querySelector('template[data-result-list]')
			.content.firstElementChild.cloneNode(true);
		container.querySelector('[data-title]').textContent = title;
		container.querySelector('[data-count]').textContent = `(${results.length})`;
		container.querySelector('ul').replaceChildren(...children);

		return container;
	}
	function renderTable(results, title, description) {
		if (!results.length) return document.createElement('span');

		const template = document.querySelector('template[data-result-table-row]');
		const children = results.map((res) => {
			const node = template.content.firstElementChild.cloneNode(true);
			node.querySelector('a').textContent = res.name;
			node.querySelector('a').href = res.url;
			return node;
		});

		const container = document
			.querySelector('template[data-result-table]')
			.content.firstElementChild.cloneNode(true);
		container.querySelector('[data-title]').textContent = title;
		container.querySelector('[data-description]').textContent = description;
		container.querySelector('[data-count]').textContent = `(${results.length})`;
		container.querySelector('tbody').replaceChildren(...children);

		return container;
	}
	function renderResults(results) {
		const released = renderList(
			results.filter((r) => r.state === 'published'),
			'Released'
		);
		const inProgress = renderTable(
			results.filter((r) => r.state === 'inprogress'),
			'In Progress',
			'A table of components that are in progress of development.'
		);
		const suggestion = renderTable(
			results.filter((r) => r.state === 'suggestion'),
			'Suggestion',
			'A table of components that have been suggested, including their status.'
		);
		return [released, inProgress, suggestion];
	}
	function renderNoResults(searchTerm) {
		const node = document
			.querySelector('template[data-no-results]')
			.content.firstElementChild.cloneNode(true);
		node.querySelector('[data-search-term]').textContent = `"${searchTerm}"`;
		return [node];
	}
	function renderError() {
		const node = document
			.querySelector('template[data-error]')
			.content.firstElementChild.cloneNode(true);
		return [node];
	}
	function searchIndex(searchTerm) {
		const el = document.querySelector('[data-search-ind]');
		if (el) {
			try {
				const INDEX = JSON.parse(el.textContent);
				const FuseSearch = new Fuse(INDEX, {
					threshold: 0.2,
					keys: [
						{ name: 'ID', weight: 0.5 },
						{ name: 'tags', weight: 0.2 },
						{ name: 'metatags', weight: 0.2 },
						{ name: 'description', weight: 0.1 },
					],
				});
				return FuseSearch.search(searchTerm);
			} catch (error) {
				console.error('Failed to load search index', error);
			}
		}
	}
	function runSearch(searchTerm) {
		setTitle(searchTerm);
		setControlValue(searchTerm);

		const results = searchIndex(searchTerm);

		setSearchResults(
			!results
				? renderError()
				: results.length
				? renderResults(results)
				: renderNoResults(searchTerm)
		);
	}
	function init() {
		// Show result content
		const params = new URLSearchParams(window.location.search);
		const searchTerm = params.get('s');
		runSearch(searchTerm ? searchTerm : '');
	}

	init();
})();
