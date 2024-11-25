/** @param {MenuItem[]} menuItems */
export default function Megamenu(menuItems) {
  const ul = document.createElement("ul");
  ul.className = "megamenu";

  for (const menuItem of menuItems) {
    ul.appendChild(MenuItem(menuItem));
  }

  return ul;
}

/** @param {MenuItem} menuItem */
function MenuItem(menuItem) {
  const li = document.createElement("li");

  if (menuItem.menuItems.length) {
    const button = document.createElement("button");
    const div = document.createElement("div");
    const ul = document.createElement("ul");

    div.className = "megamenu__submenu";

    for (menuItem of menuItem.menuItems) {
      ul.appendChild(MenuItem(menuItem));
    }

    button.textContent = menuItem.label;

    div.appendChild(ul);
    li.appendChild(button);
    li.appendChild(div);
  } else {
    const a = document.createElement("a");

    a.setAttribute("href", menuItem.href);
    a.textContent = menuItem.label;

    li.appendChild(a);
  }

  return li;
}
