//Se traen los datos con los que voy a trabajar
const formulario = document.getElementById("formulario");
const cards = document.getElementById("cards_content");

//Agrego el evenListener al botón de mi formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  //Creación de la estructura de mi tarjeta
  const card = document.createElement("div");
  card.className = "card";
  const card_top = document.createElement("div");
  card_top.className = "card_top";
  const card_bot = document.createElement("div");
  card_bot.className = "card_bot";
  card.append(card_top, card_bot);
  const card_title = document.createElement("h1");
  card_title.className = "card_title";
  const card_date = document.createElement("p");
  card_date.className = "card_date";
  const card_content = document.createElement("p");
  card_content.className = "card_content";
  card_top.append(card_title);
  card_bot.append(card_content, card_date);
  //llamo a la función que agrega a mi card los botones eliminar y editar
  const { botonEditar, botonEliminar } = deleteandedit();
  const card_top2 = document.createElement("div");
  card_top2.id = "card_top2";
  card_top2.append(botonEditar, botonEliminar);
  console.log(card_top2);
  card_top.append(card_top2);
  //Toma de valores del formulario y asignación a sus etiquetas
  const titulo = document.getElementById("form_title").value;
  const info = document.getElementById("info").value;
  const time = new Date().toLocaleString();

  card_title.textContent = titulo;
  card_content.textContent = info;
  card_date.textContent = time;
  console.log(card);
  cards.append(card);
});

//Agrego el evento click a mi contenedor de cartas
cards.addEventListener("click", (event) => {
  event.preventDefault();
  //Identifico si el elemento clickeado en mi contenedor fue en el botón de edición o en el de eliminar
  if (event.target.closest(".btn_eliminar")) {
    const aux = event.target.closest(".card");
    deleteTask(aux);
  } else if (event.target.classList.contains("btn_editar")) {
    const aux = event.target.closest(".card");
    editTask(event.target.parentElement);
  }
});

//Función que elimina el elemento que se le envie
function deleteTask(taskItem) {
  if (confirm("¿Esta segur@ de borrar este elemento ?")) {
    taskItem.remove();
  }
}

function deleteandedit() {
  //creación del botón editar
  const btn_editar = document.createElement("button");
  btn_editar.className = "btn_editar";
  btn_editar.id = "editar";
  const icono1 = document.createElement("i");
  icono1.className = "bi bi-pencil-square";
  btn_editar.append(icono1);
  //Creación del botón eliminar

  const btn_eliminar = document.createElement("button");
  btn_eliminar.className = "btn_eliminar";
  btn_eliminar.id = "eliminar";
  const icono2 = document.createElement("i");
  icono2.className = "bi bi-trash3";
  btn_eliminar.append(icono2);
  return {
    botonEditar: btn_editar,
    botonEliminar: btn_eliminar,
  };
}
