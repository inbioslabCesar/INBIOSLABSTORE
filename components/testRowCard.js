const testRowCard = (carrito) => {
  return `
  <th class="items-id" scope="row">${carrito.id}</th>
    <td class="items-name">${carrito.name.toUpperCase()}</td>
    <td class="items-cantidad">${carrito.cantidad}</td>
    <td class="items-price">${carrito.price1 * carrito.cantidad}
    </td>
    <td>
      <button class="btn-danger">X</button>
    </td> 
  
  `;
};

export default testRowCard;
