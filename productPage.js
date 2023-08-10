function productPage() {
  data.forEach((element) => {
    const main = document.getElementsByTagName("main");
    const dataTitle = document.getElementById("dataTitle");
    dataTitle.innerText = element.title;
    const dataDescription = document.getElementById("dataDescription");
    dataDescription.innerText = element.description;

    const dataCategory = document.getElementById("dataCategory");
    dataCategory.innerText = element.category;

    const dataPrice = document.getElementById("dataPrice");
    dataPrice.innerText = element.price;

    const dataQuantity = document.getElementById("dataQuantity");
    dataQuantity.innerText = element.description;
    const img = document.getElementsByTagName("img");
    img.src = element.image;

    // main.appendChild(dataTitle);
    // main.appendChild(dataDescription);
    // main.appendChild(dataCategory);
    // main.appendChild(dataPrice);
    // main.appendChild(dataQuantity);
  });
}
productPage();
