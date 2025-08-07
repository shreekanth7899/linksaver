// Load links from localStorage on page load
window.onload = function () {
  loadLinks();
};

function addLink() {
  const nameInput = document.getElementById("nameInput");
  const urlInput = document.getElementById("urlInput");

  const name = nameInput.value.trim();
  const url = urlInput.value.trim();

  if (!name || !url) {
    alert("Please enter both a name and a valid URL.");
    return;
  }

  const link = { name, url };

  const links = JSON.parse(localStorage.getItem("savedLinks")) || [];
  links.push(link);
  localStorage.setItem("savedLinks", JSON.stringify(links));

  nameInput.value = "";
  urlInput.value = "";

  loadLinks();
}

function loadLinks() {
  const linkList = document.getElementById("linkList");
  linkList.innerHTML = "";

  const links = JSON.parse(localStorage.getItem("savedLinks")) || [];

  links.forEach((link, index) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    a.target = "_blank";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteLink(index);

    li.appendChild(a);
    li.appendChild(deleteBtn);
    linkList.appendChild(li);
  });
}

function deleteLink(index) {
  const links = JSON.parse(localStorage.getItem("savedLinks")) || [];
  links.splice(index, 1); // Remove 1 item at given index
  localStorage.setItem("savedLinks", JSON.stringify(links));
  loadLinks(); // Refresh the list
}
