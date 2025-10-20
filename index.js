const list = document.querySelector(".list");
const input = document.querySelector("input");
const button = document.querySelector(".create-btn");

let content = [];
const ListItem = (content) => {
  return `<div class="item"> ${content} <button class= "delete-btn">Delete</button></div>`;
};
const render = () => {
  list.innerHTML = content
    .map((item) => {
      return ListItem(item);
    })
    .join("");
};
button.addEventListener("click", () => {
  const value = input.value;
  content.push(value);
  render();
  console.log(content);

  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      content = content.filter(item, (index) => index !== i);
    });
  });
});
