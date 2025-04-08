// Toggle del carrito
document.getElementById("cart")?.addEventListener("click", () => {
    const cartBox = document.getElementById("cart_bx");
    if (cartBox) {
      cartBox.classList.toggle("cart_bx_active");
    }
  });
  
  // Contadores
  let card_count = 0;
  let price_add = 0;
  
  // Función para actualizar total y cantidad en el carrito
  function updateCartDisplay() {
    document.getElementById("total").innerText = "$" + price_add;
    document.getElementById("cart_count").innerText = card_count;
  }
  
  // Función para agregar card
  const addcard = () => {
    const imgSrc = document.getElementsByClassName("main_img")[0]?.src;
    const title = document.getElementsByClassName("coffee_title")[0]?.innerText;
    const price = document.getElementsByClassName("coffee_price")[0]?.title;
  
    // Crear el card
    let card = document.createElement("div");
    card.className = "crd animate-add"; // animación al agregar
    card.id = `card${card_count}`;
  
    card.innerHTML = `
      <div class="img_title">
        <img src="${imgSrc}" alt="">
        <div class="title_price">
          <h5>${title}</h5>
          <h6 title="${price}">$${price}</h6>
        </div>
      </div>
    `;
  
    // Botón para remover
    let removeBtn = document.createElement("i");
    removeBtn.className = "bi bi-x";
    removeBtn.onclick = () => {
      removeCard(card.id);
    };
  
    card.appendChild(removeBtn);
  
    let container = document.getElementsByClassName("coffee_cards")[0];
    if (container) {
      container.appendChild(card);
    }
  
    card_count++;
    price_add += Number(price);
    updateCartDisplay();
  };
  
  // Función para eliminar un card
  function removeCard(cardId) {
    let card = document.getElementById(cardId);
    if (card) {
      const priceText = card.getElementsByTagName("h6")[0]?.title || "0";
      price_add -= Number(priceText);
      card.remove();
      card_count--;
      updateCartDisplay();
    }
  }
  
  // Agregar evento al botón "Agregar"
  document.getElementById("add_button")?.addEventListener("click", () => {
    addcard();
  });
  
  // Lista de productos
  let coffee = [
    {
      name: "Café Negro",
      price: "9",
      img: "Style/img/coffee_cup.png"
    },
    {
      name: "Capuchino",
      price: "14",
      img: "Style/img/cappuccino.png"
    },
    {
      name: "Mocachino",
      price: "16",
      img: "Style/img/coffee_cup3.png"
    }
  ];
  
  // Paginación visual (círculos de navegación)
  const pagi_fun = () => {
    const pagiButtons = document.getElementsByClassName("pagi_btn");
    Array.from(pagiButtons).forEach((btn) => {
      btn.style.width = "10px";
      btn.style.height = "10px";
    });
    if (pagiButtons[next_back_count]) {
      pagiButtons[next_back_count].style.width = "15px";
      pagiButtons[next_back_count].style.height = "15px";
    }
  };
  
  // Contador para navegación
  let next_back_count = 0;
  
  // Botón siguiente
  document.getElementById("next")?.addEventListener("click", () => {
    next_back_count++;
    if (next_back_count >= coffee.length) next_back_count = 0;
  
    document.getElementsByClassName("main_img")[0].src = coffee[next_back_count].img;
    document.getElementsByClassName("coffee_title")[0].innerText = coffee[next_back_count].name;
    document.getElementsByClassName("coffee_price")[0].title = coffee[next_back_count].price;
    document.getElementsByClassName("coffee_price")[0].innerText = "$" + coffee[next_back_count].price;
  
    pagi_fun();
  });
  
  // Botón anterior
  document.getElementById("back")?.addEventListener("click", () => {
    next_back_count--;
    if (next_back_count < 0) next_back_count = coffee.length - 1;
  
    document.getElementsByClassName("main_img")[0].src = coffee[next_back_count].img;
    document.getElementsByClassName("coffee_title")[0].innerText = coffee[next_back_count].name;
    document.getElementsByClassName("coffee_price")[0].title = coffee[next_back_count].price;
    document.getElementsByClassName("coffee_price")[0].innerText = "$" + coffee[next_back_count].price;
  
    pagi_fun();
  });
  