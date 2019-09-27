const img1 = require("../images/small-product-1.jpg");
const img2 = require("../images/small-product-2.jpg");
const img3 = require("../images/small-product-3.jpg");
const img4 = require("../images/small-product-4.jpg");
const images = [img1, img2, img3, img4];

const imagesContainer = document.querySelectorAll(
  ".Product__small-product-img"
);

imagesContainer.forEach((img, i) => (img.src = images[i]));
