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

  // Get existing links or empty array
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

    li.appendChild(a);
    linkList.appendChild(li);
  });
}
