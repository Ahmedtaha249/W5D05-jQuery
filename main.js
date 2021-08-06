//======================Q2===============================
const header = $("<h1></h1>");
header.text("Todo List");
const unOrder = $("<ul></ul>");

const body = $("body");
body.append(header);
body.append(unOrder);

let id = 3;
// Q3
let toDos = [
  { text: "wake up", id: 0 },
  { text: "eat breakfast", id: 1 },
  { text: "code", id: 2 },
];

//========================  Q4===============================
const renderList = () => {
  unOrder.text("");
  toDos.forEach(function (elem, i) {
    //const div = $("div")
    const li = $("<li></li>");
    li.text(elem.text);

    unOrder.append(li);
    //li.text(elem.text)
    console.log(elem.text);
  });
};
renderList();

//=========================Q5============================

const btn = $("<input>");
const btn_1 = $("<button> </button>");

btn_1.text("button");
body.append(btn);
body.append(btn_1);

const addToList = () => {
  const div = $("<div></div>");
  const list = $("<li></li>");
  list.text(btn.value);
  unOrder.append(list);
  unOrder.append(div);

  toDos.push({ text: btn.value, id: id++ });
  console.log(toDos);
};
btn_1.on("click", addToList);

//======================Q6===========================

const button = $("<button></button>");
button.text("Delete");
const div=$("<div></div>")


const deleteListItem = () => {
  toDos = toDos.filter(function (elem, i) {
    // toDos.shift(elem.text)
    return elem.id != this.id;
  });
  renderList();
};


button.off("click", deleteListItem);
div.append(button);
unOrder.append(div)