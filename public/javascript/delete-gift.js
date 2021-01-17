var giftContainerEl = document.querySelector("#gifts-container");

var deleteBtnHandler = function (event) {
    var targetEl = event.target;
  
    if (targetEl.matches(".delete-gift-btn")) {
      var id = targetEl.getAttribute("id");
      deleteGift(id)
    }
  };
  
  
  async function deleteGift(id) {

  const response = await fetch(`/api/gifts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

giftContainerEl.addEventListener("click", deleteBtnHandler);