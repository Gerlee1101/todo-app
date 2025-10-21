const list = document.querySelector(".list");
const input = document.querySelector("input");
const button = document.querySelector(".create-btn");

let content = [];

const ListItem = (content) => {
  return `<div class="item">
  <input type="checkbox" class="checkbox"/> 
    ${content} 
    <button class= "delete-btn">Delete</button>
  </div>`;
};
const render = () => {
  list.innerHTML = content
    .map((item) => {
      return ListItem(item);
    })
    .join("");
  addListeners();
};
const addListeners = () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      content = content.filter((item, index) => index !== i);
      render();
    });
  });
};
button.addEventListener("click", () => {
  const value = input.value;
  content.push(value);
  render();
});
// const checkbox = document.querySelector(".checkbox");
// checkbox.addEventListener("change", function () {
//   labelText.style.textDecoration = checkbox.checked ? "line-through" : "none";
// });
