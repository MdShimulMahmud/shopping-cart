const productDetails = [
  {
    name: "Iphone 12 pro max",
    img: "./images/iphone.jpg",
    price: 500,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Quos enim",
  },
  {
    name: "Apple Desktop Pro",
    img: "./images/desktop.jpg",
    price: 600,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi odio numquam rem sunt optio iure eum Cum asperiores aspernatur et praesentium ullam sapiente unde commodi",
  },
  {
    name: "HP Pavilion Series",
    img: "./images/laptop.jpg",
    price: 400,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Quos enim",
  },
  {
    name: "Apple MacBook Pro",
    img: "./images/ipad.jpg",
    price: 450,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi odio numquam rem sunt optio iure eum Cum asperiores aspernatur et praesentium ullam sapiente unde commodi animi recusandae officia fugit? Tempora inventore harum impedit rem minima sit explicabo quas nisi consequuntur",
  },
  {
    name: "Tablet Pro Mockup 10",
    img: "./images/Tablet_Pro_Mockup_10_.jpg",
    price: 400,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Quos enim Lorem ipsum dolor sit amet consectetur adipisicing elit Quos enim ",
  },
];
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const viewButton = document.querySelector("#view-more");

const inputNumber = document.getElementById("quantity");
const confirmButton = document.getElementById("submit");
const order = document.getElementById("order");
const orderProductName = document.getElementById("order-product-name");
const productPrice = document.getElementById("order-price");

const orderProductDetails = document.getElementById("order-details");

const subTotalPrice = document.getElementById("subTotalPrice");
const totalPrice = document.getElementById("totalPrice");
const vat = document.getElementById("vat");
const productImg = document.querySelector(".order-image > img");
const productName = document.getElementById("order-product-name");

const checkout = document.querySelector(".checkout-container");

const buyNowButton = document.getElementById("set");
checkout.appendChild(order);
checkout.style.display = "none";

function setDetails(val) {
  // this.preventDefault();
  alert("Product added to cart!");
  checkout.style.display = "block";
  const value = productDetails[val].price;
  productName.innerHTML = `<h4> Product Name: ${productDetails[val].name}</h4>`;
  productPrice.innerHTML = `<h3>Price : ${productDetails[val].price}</h3>`;
  productImg.src = productDetails[val].img;
  orderProductDetails.innerHTML = productDetails[val].details;
}

function getPrice(val) {
  // e.preventDefault();

  const value = productDetails[val].price;
  const noOfItems = inputNumber.value;

  subTotalPrice.innerHTML = `${value * noOfItems}`;
  const vat1 = (noOfItems * (value * 10)) / 100;

  vat.innerHTML = `${vat1}`;
  const calculatedPrice = value * noOfItems + vat1;
  totalPrice.innerHTML = ` ${calculatedPrice}`;

  // alert("Price");
}
setTimeout(() => {
  item1.addEventListener("click", setDetails.bind(this, 0), false);
  item2.addEventListener("click", setDetails.bind(this, 1), false);
  item3.addEventListener("click", setDetails.bind(this, 2), false);
  item4.addEventListener("click", setDetails.bind(this, 3), false);
  item5.addEventListener("click", setDetails.bind(this, 4), false);
}, 2000);

setTimeout(() => {
  buyNowButton.addEventListener("click", getPrice.bind(this, 0), false);
  buyNowButton.addEventListener("click", getPrice.bind(this, 1), false);
  buyNowButton.addEventListener("click", getPrice.bind(this, 2), false);
  buyNowButton.addEventListener("click", getPrice.bind(this, 3), false);
  buyNowButton.addEventListener("click", getPrice.bind(this, 4), false);
}, 3000);

function removeTotalPrice() {
  checkout.style.display = "none";
  inputNumber.value = 0;
  subTotalPrice.innerHTML = "";
  vat.innerHTML = "";
  totalPrice.innerHTML = "";
  productName.innerHTML = ``;
  productImg.src = null;
  orderProductDetails.innerHTML = null;
  productPrice.innerHTML = ``;
}

setTimeout(() => {
  confirmButton.addEventListener("click", () => {
    const noOfItems = inputNumber.value;

    if (noOfItems < 1) {
      alert("Cart is empty!");
    } else {
      if (totalPrice.innerHTML == "") {
        alert("To see the price clicked buy now button");
      } else {
        alert(
          "Are you sure to confirm order? if yes! your cart will be empty!"
        );
        removeTotalPrice();
      }
    }
  });
}, 3000);
