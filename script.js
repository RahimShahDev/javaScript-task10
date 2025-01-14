function createCard() {
  let title = document.getElementById("title").value;
  let message = document.getElementById("message").value;
  if (title.trim() === "" || message.trim() === "") {
    alert("Please enter both a title and a message.");
    return;
  } else {
    renderDom(title, message);
    document.getElementById("title").value = "";
    document.getElementById("message").value = "";
  }
}
function removeItem(event) {
  event.parentElement.remove();
}
function renderDom(title, message) {
  let cardHTML = `
    <div class="js_body">
    <span onClick="removeItem(this)" class ="remove-item">x</span>
        <div class="js_container">
            <h1 class="js_title">${title}</h1>
            <p class="js_message">${message}</p>
        </div>
    </div>
    `;
  document.getElementById("card_container").innerHTML += cardHTML;
}

function search() {
  const searchTerm = document
    .getElementById("search")
    .value.trim()
    .toLowerCase();
  const cards = document.querySelectorAll(".js_body");

  cards.forEach((card) => {
    const title = card
      .querySelector(".js_title")
      .textContent.trim()
      .toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Create a table with fields names (id, name, Address, Contact number etc) and asign a values with this fields of the table, and then search by name or by id of the particular entry of the fields of the table.
