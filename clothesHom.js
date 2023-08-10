let dataUpdated = getStorage();

function getStorage() {
  let dataStorage = localStorage.getItem("data");
  return JSON.parse(dataStorage);
}
function setStorage(dataStorage) {
  localStorage.setItem("data", JSON.stringify(dataStorage));
}
function checkStorage(dataStorage) {
  if (!getStorage()) {
    setStorage(dataStorage);
  }
}

checkStorage(data);

function searchHom() {
  let storage = getStorage();
  CreateProductCard(storage);
  let buttonSearchNav = document.getElementsByClassName("buttonSearchNav")[0];
  buttonSearchNav.addEventListener("click", () => {
    let inputSearch = document.getElementsByClassName("searchNav")[0];
    let search = storage.filter((element) => {
      return (
        element.category.search(inputSearch.value) >= 0 ||
        element.title.search(inputSearch.value) >= 0
      );
    });
    CreateProductCard(search);
  });
}
searchHom();

function categoryFilter() {
  let button = document.getElementsByClassName("buttonNav");
  for (let i = 0; i < button.length; i++) {
    let storage = getStorage();
    button[i].addEventListener("click", () => {
      let filter1 = storage.filter((element) => {
        return (
          element.category === button[i].id || button[i].id === "All Products"
        );
      });
      CreateProductCard(filter1);
    });
  }
}

categoryFilter();

function CreateProductCard(search) {
  const main = document.getElementsByTagName("main")[0];
  main.replaceChildren();
  search.forEach((element) => {
    const productCard = document.createElement("div");
    productCard.id = "productCard";
    const containerImg = document.createElement("div");
    containerImg.id = "containerImg";
    const imgCard = document.createElement("img");
    imgCard.id = "imgCard";
    imgCard.src = element.image;
    const description = document.createElement("div");
    description.id = "description";
    const line = document.createElement("hr");
    line.id = "line";
    description.innerText = element.title;
    const editing = document.createElement("div");
    editing.id = "editing";
    const buttonEdit = document.createElement("button");
    buttonEdit.classList = "buttonEdit";
    const buttonDeletion = document.createElement("button");
    buttonDeletion.id = `delete-for-id${element.id}`;

    buttonDeletion.classList = "buttonEdit";

    const iDeletion = document.createElement("i");
    iDeletion.classList = "material-icons";
    iDeletion.innerText = "delete";
    const iEdit = document.createElement("i");
    iEdit.classList = "material-icons";
    iEdit.innerText = "mode_edit";

    containerImg.appendChild(imgCard);
    buttonDeletion.appendChild(iDeletion);
    buttonEdit.appendChild(iEdit);
    editing.appendChild(buttonDeletion);
    editing.appendChild(buttonEdit);

    productCard.appendChild(containerImg);

    productCard.appendChild(description);
    productCard.appendChild(line);
    productCard.appendChild(editing);
    main.appendChild(productCard);

    buttonDeletion.addEventListener("click", () => {
      // let storage = getStorage();
      productCard.remove();
      let filter1 = dataUpdated.filter((subElement) => {
        return subElement.id === element.id;
      });
      setStorage(filter1);
      CreateProductCard(filter1);
    });
  });
}

// function removeCard() {
//   let storage = getStorage();
//   let removeCard = document.getElementById("delete");
//   let main = document.getElementsByTagName("main");
//   console.log(removeCard);
// removeCard.addEventListener("click", () => {
//   console.log("!!!!!!!");
//   main.remove();
//   let filter1 = storage.filter((element) => {
//     return element !== removeCard;
//   });
//   CreateProductCard(filter1);
// });
