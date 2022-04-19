/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Ma Phong Duc
 *      Student ID: 137015194
 *      Date:       March 31, 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

addEventListener("DOMContentLoaded", function () {
  categories.forEach((category) => {
    let buttons = document.createElement("button");

    let menu = document.getElementById("menu");

    buttons.innerHTML = category.name;
    buttons.id = category.id;
    menu.appendChild(buttons);
  });

  function createProductCard(product) {
    let convertPrice = 0;
    const card = document.createElement("div");
    card.classList.add("card");

    //Add Image element and save to card
    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.classList.add("card-image");
    card.appendChild(productImage);

    //Create a div, having the className "card-content", to hold title, paragraph and price
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    //Add h3 "title" element and save to card-content
    const productTitle = document.createElement("h3");
    productTitle.innerHTML = product.title;
    productTitle.classList.add("card-title");
    cardContent.appendChild(productTitle);

    //Add p "description" element and save to card-content
    const productParagraph = document.createElement("p");
    productParagraph.innerHTML = product.description;
    productParagraph.classList.add("card-paragraph");
    cardContent.appendChild(productParagraph);

    //Add span "price" element and save to card-content
    const currencyCanada = { style: "currency", currency: "CAD" };
    const numberFormat2 = new Intl.NumberFormat("en-US", currencyCanada);

    convertPrice = product.price / 100;
    const productPrice = document.createElement("span");
    productPrice.innerHTML = numberFormat2.format(convertPrice.toFixed(2));
    productPrice.classList.add("card-price");
    cardContent.appendChild(productPrice);

    card.addEventListener("click", function () {
      let object = {
        Title: product.title,
        Description: product.description,
        Price: numberFormat2.format(convertPrice.toFixed(2))
      };
      console.log(object);
    });

    //save cardContent to card
    card.appendChild(cardContent);
    return card;
  }

  function productList(list) {
    list.forEach((e) => {
      let section = document.getElementById("items");
      //save card to section element
      let card = createProductCard(e);
      section.appendChild(card);
    });
  }
  let h2Title = document.querySelector("#selected-category");
  h2Title.innerHTML = categories[0].name;

  let filterFirstCateProducts = products.filter(
    (product) => product.categories.includes(categories[0].id) && product.discontinued === false
  );

  productList(filterFirstCateProducts);

  let buttonArray = document.querySelectorAll("button");
  buttonArray.forEach((element) => {
    element.addEventListener("click", function () {
      h2Title.innerHTML = element.innerHTML;
      let filterProducts = products.filter(
        (product) => product.categories.includes(element.id) && product.discontinued === false
      );

      //remove precious cards before creating new ones
      let divArray = document.querySelectorAll(".card");
      divArray.forEach((e) => {
        e.parentNode.removeChild(e);
      });

      productList(filterProducts);
    });
  });
});
