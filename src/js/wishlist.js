import { run, wrap } from './lib/dom';

run('#wishlist', target => {
  fetch(`${process.env.API_DOMAIN}/wishlist`)
    .then(res => res.json())
    .then(({ records }) => {
      target.innerHTML = '';
      const wishElements = [];
      for (let wish of records) {
        const {
          fields: { Item, URL, Done, Own },
        } = wish;
        const listItem = document.createElement('li');
        const spanElement = document.createElement('span');
        spanElement.textContent = Item;
        listItem.classList.add('mt-1');
        listItem.append(spanElement);

        if (Done) {
          spanElement.style.textDecoration = 'line-through';
        }

        if (URL) {
          const aElement = document.createElement('a');
          aElement.href = URL;
          aElement.target = "_blank";
          aElement.classList.add('text-blue-700');
          aElement.classList.add('hover:underline');
          wrap(spanElement, aElement);
        }

        if (Own) {
          spanElement.innerHTML += ` <span class="text-gray-500">(куплю себе сам)</span>`
        }

        wishElements.push(listItem);
      }
      target.append(...wishElements);
    });
});
