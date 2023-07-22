const productArray = [
  {
    id: 1,
    title: "Album1",
    price: 100,
    imgUrl: "/img/Album 1.png"
  },
  {
    id: 2,
    title: "Album2",
    price: 50,
    imgUrl: "/img/Album 2.png"
  },
  {
    id: 3,
    title: "Album3",
    price: 70,
    imgUrl: "/img/Album 3.png"
  },
  {
    id: 4,
    title: "Album4",
    price: 100,
    imgUrl: "/img/Album 4.png"
  }
];

function getProductData(id) {
  let productData = productArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data is not defined ID: " + id);
    return undefined;
  }

  return productData;
}

export { productArray, getProductData };
