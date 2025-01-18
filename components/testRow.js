const testRow = (item) => {
  return ` 
  <td class="font-monospace">${item.name.toUpperCase()}</td>
  <td><button id="${
    item.id
  }" class="btn btn-outline-success rounded-pill desplegar-modal">VER</button></td>
  <td><button id="${
    item.id
  }" class="btn btn-outline-primary rounded-pill button-comprar">Comprar</button></td>  `;
};

export default testRow;
