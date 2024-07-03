/* Generar numeros aleatorios*/
function getRandomNumber (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  
  let CreatePostForm= document.getElementById("user-form-create-post")
  let tagsInput= document.getElementById("input-hashtags")
  let tagsArray = [];
  tagsInput.addEventListener("keydown", event => {
      let keyCode = event.keyCode;
      let value = event.target.value;
      console.log(keyCode);
      if (keyCode === 32) {
          tagsArray = [...tagsArray, value];
          tagsInput.value = "";
      }
      console.log(tagsArray);
  });
  tagsArray.forEach(elemento => {
    console.log(elemento);
  })
  /*let tagsWrapper=document.getElementById("post-cover-image")
  while (tagsWrapper.firstChild) {tagsWrapper.removeChild (tagsWrapper.firstChild)}
  tagsArray.forEach(element => {
    const tagElement =document.createElement("span");
    tagElement.className="badge me-1";
    tagElement.style.backgroundColor= getRandomColor();
    tagElement.style.color="white";
    tagElement.style.borderRadius="0.25rem";
    tagElement.style.display="inline-block";
    tagElement.style.margin="0.2 rem";
    tagElement.style.display="inline-block";
    tagElement.style.margin="0.2 rem";
    tagElement.style.padding="0.5 rem 1rem";
    tagElement.style.textAlign="center";
  });
  const tagText = document.createElement("span")
  tagText.textContent=tag;
  //tagElement.appendChild(tagText)*/
  
  CreatePostForm.addEventListener("submit", (form) => {
      form.preventDefault();
    
      // extrae la informacion de los imputs, preventDefault the default action that belongs to the event will not occur
    
    let postCoverImage = document.getElementById("post-cover-image");
    let postTitle= document.getElementById("post-title");
    let inputHashtags= document.getElementById("input-hashtags");
    let postContent= document.getElementById("post-content");
  
    if (postCoverImage.value == "" || postTitle.value == "" || inputHashtags.value == "" || postContent.value =="" ) {
      alert("Ensure you input a value in all fields!");
    } else {
      // perform operation with form input
      alert("This form has been successfully submitted!");
      /*console.log(
        `This form has this cover-image of ${postCoverImage.value} a post-title of ${postTitle.value} this hashtags ${imputHashtags.value} and this post-content ${postContent.value} `
      );*/
  
      
      //let emptyPost = {};
      let comentNumber= `${getRandomNumber (2,200)} coments`
      console.log(comentNumber)
      
      let reactionNumber= `${getRandomNumber (2,200)} reactions`
      console.log(reactionNumber)
      
      //Agregar los comentarios y reacciones al post
     
      
  
      let emptyPost = {
        postCoverImage : postCoverImage,
        postTitle : postTitle,
        tagsArray : tagsArray,
        postContent : postContent,
        coments : comentNumber,
        reactions : reactionNumber
      }
  
     
  
  console.log(emptyPost);
  updatePreview(emptyPost);
  
  
    };
    
    });
  
    //Generar botones de tags y una lista de con cada elemento como hashtag
  
  
  
  
  
  
  
    
  //Agregar comentarios y reacciones al formulario
  
  
  
  
  //Enlazar el contenido de los inputs a la tarjeta de Post
  /*Esta función modifica la card que está en nuestro HTML*/
   const updatePreview = (entryData) => {
   // console.log(entryData);
    /*Recibe como argumento entryData, que representa el objeto de nuestra entrada de blog*/
  
    /*Extraemos los valores de title, content, cover, que usaremos para modificar nuestro HTML*/
    //let { coverImage, title, hashtags, content, coments, reactions } = entryData;
    
  let coverImage = entryData.postCoverImage.value;
  let title = entryData.postTitle.value;
  let hashtags = entryData.tagsArray.value;
  let content = entryData.postContent.value;
  let coments = entryData.coments;
  let reactions = entryData.reactions;
  
  console.log(coments);
    /*Seleccionamos los elementos de html que vamos a modificar. Estos elementos se encuentran en el index.html*/
    let coverElement = document.getElementById("card-post-cover-image"); /*la imagen*/
    let titleElement = document.getElementById("card-post-title"); /*el título*/
    let hashtagsElement = document.getElementById("card-input-hashtags"); /*las etiquetas*/
    let contentElement =document.getElementById("card-post-content"); /*el contenido*/
    let comentsElement = document.getElementById("card-coments"); /*comentarios*/
    let reactionsElement = document.getElementById("card-reactions"); /*reacciones*/
  console.log(comentsElement);
    /*cambiamos el contenido de cada elemento, usando lo que tenemos en entryData*/
    coverElement.setAttribute("src", coverImage);
    titleElement.textContent = title;
    hashtagsElement.textContent = hashtags;
    contentElement.textContent = content;
    comentsElement.innerHTML = coments;
    reactionsElement.innerHTML = reactions;
  };
  