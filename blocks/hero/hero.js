export default async function decorate(block) {
  const usp = new URLSearchParams(window.location.search);

  const query = usp.get('q') || '';

  if (query) {
    const displaySearch = document.createElement('p');
    displaySearch.innerHTML = `<div style="color: white">Parameter: <strong>${query}</strong></div>`;
    block.append(displaySearch);
  }
}
