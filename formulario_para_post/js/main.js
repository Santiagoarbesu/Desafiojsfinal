    // Función para generar la fecha aleatoria
    function generarFechaAleatoria() {
        // Crear un objeto de fecha aleatoria entre 1970 y 2023
        var randomYear = Math.floor(Math.random() * (2024 - 2023 + 1)) + 2023;
        var randomMonth = Math.floor(Math.random() * 12) + 1; // Mes de 1 a 12
        var randomDay = Math.floor(Math.random() * 28) + 1; // Día de 1 a 28 (considerando febrero)
    
        // Formatear la fecha como 'YYYY-MM-DD'
        var formattedDate = randomYear + '-' + (randomMonth < 10 ? '0' + randomMonth : randomMonth) + '-' + (randomDay < 10 ? '0' + randomDay : randomDay);
    
        // Asignar la fecha al campo de texto
        document.getElementById('randomDate').value = formattedDate;
    }let CreatePostForm= document.getElementById("user-form-create-post")
CreatePostForm.addEventListener("submit", (form) => {
    form.preventDefault();
  
    // extrae la informacion de los imputs, preventDefault the default action that belongs to the event will not occur
  });
  let postCoverImage = document.getElementById("post-cover-image");
  let postTitle= document.getElementById("post-title");
  let imputHashtags= document.getElementById("input-hashtags");
  let postContent= document.getElementById("post-content");


  if (postCoverImage.value == "" || postTitle.value == "" || imputHashtags.value == "" || postContent.value =="" ) {
    alert("Ensure you input a value in all fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has this cover-image of ${postCoverImage.value} a post-title of ${postTitle.value} this hashtags ${imputHashtags.value} and this post-content ${postContent.value} `
    );

    postCoverImage.value = "";
    postTitle.value = "";
    imputHashtags.value = "";
    postContent.value = "";
  };
  let createPostForm = document.querySelectorAll("#user-form-create-post .post-field");

console.log();

  let emptyPost = {};

/*a cada campo le agregamos un listener*/
createPostForm.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    /*De cada campo, extraeos loq ue tiene escrito, y su nombre, lo que tiene escrito representa el valor de la propiedad, y el nombre del campo representa la propiedad que queremos crear en el  objeto*/
    let value = event.target.value;
    let property = event.target.name;

    console.log("property: ", property);
    console.log("value: ", value);

    /*Asingamos la propiedad y su valor al objeto*/
    emptyPost[property] = value;
    console.log("entryObject: ", emptyPost);

    /*usamos el objeto actualizado, para modificar la vista previa de nuestra entrada de blog ( ver la función updatePreview que esta más arriba)*/
  });
});
//Agregar comentarios y reacciones al formulario

/* Generar numeros aleatorios*/
function getRandomNumber (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let comentNumber= `${getRandomNumber (2,200)} coments`
console.log(comentNumber)

let reactionNumber= `${getRandomNumber (2,200)} reactions`
console.log(reactionNumber)

//Agregar los comentarios y reacciones al post
emptyPost.coments=comentNumber
emptyPost.reactions=reactionNumber
console.log(emptyPost)

//Generar botones de tags
let tagsInput = document.getElementById ("input-hashtags");
let tagsWrapper = document.getElementById("tags-wrapper");

let tagsArray = [];
tagsInput.addEventListener("keydown", event => {
    let keyCode = event.keyCode;
    let value = event.target.value;
    console.log(keyCode);
    if (keyCode === 32) {
        tagsArray = [...tagsArray, value];
        tagsInput.value = "";
    }
    console.log(tagArray);
});

tagsInput.addEventListener("keydown",(event)=>{
    let keyCode = event.keyCode;
    let value = event.target.value;
    console.log(keyCode);
    if (keyCode === 32) {
        tagsArray = [...tagsArray, value];
        tagsInput.value = "";
    }
    console.log(tagsArray);
})

const printTagButtons = (tagsArray) => {
    tagsWrapper.innerHTML = "";
    let tagsHtml = tagsArray.reduce((accum, current) => {
        return'button class="btn btn-primary">#${current}</button>';
    })
    tagsWrapper.innerHTML = tagsHtml;
};