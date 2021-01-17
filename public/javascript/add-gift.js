async function newGiftHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#gift-name').value;
  const gift_description = document.querySelector('#gift-description').value;
  const gift_url = document.querySelector('#gift-url').value;

  const response = await fetch(`/api/gifts`, {
      method: 'POST',
      body: JSON.stringify({
          name,
          gift_description,
          gift_url
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  if (response.ok) {
      document.location.replace('/gift-list');
  } else {
      alert(response.statusText);
  }
}

document.querySelector('#gift-form').addEventListener('submit', newGiftHandler);