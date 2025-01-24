const modalShow = (productId, data) => {
  const producto = data.find((item) => item.id === productId);
  console.log(producto);
  if (producto) {
    document.getElementById("modal-product-name").textContent =
      producto.name.toUpperCase();
    document.getElementById("description").textContent = producto.description;
    document.getElementById("modal-product-price").textContent =
      producto.price1;
    document.getElementById("modal-product-info").textContent =
      producto.info.toUpperCase();
  } else {
    document.getElementById("modal-product-name").textContent =
      "PRODUCTO NO ENCONTRADO";
    document.getElementById("modal-product-price").textContent =
      "PRODUCTO NO ENCONTRADO";
    document.getElementById("modal-product-info").textContent =
      "PRODUCTO NO ENCONTRADO";
  }
  const modal = document.querySelector(".contenedor-modal");
  modal.classList.add("show");
};

export default modalShow;
