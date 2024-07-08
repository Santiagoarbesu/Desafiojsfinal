  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyDNH9hgWWpOQ-Ugvv2Ey5aXBvOhNtdOjG0",
    authDomain: "devto-project-cf4c2.firebaseapp.com",
    databaseURL: "https://devto-project-cf4c2-default-rtdb.firebaseio.com",
    projectId: "devto-project-cf4c2",
    storageBucket: "devto-project-cf4c2.appspot.com",
    messagingSenderId: "1052311079961",
    appId: "1:1052311079961:web:60d2213f4104cf9f392e88"
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  console.log (app);
  console.log(db);
  const dbRef = ref(db,"post");
 

/* Generar numeros aleatorios*/
function getRandomNumber (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);node
}
 const getRandomColor = () => {
  const letters = [
    "primary","secondary","success","danger","warning","info","light","dark"
  ];
 
    return letters[Math.floor(Math.random()*8)];
 }

let CreatePostForm= document.getElementById("user-form-create-post")
let tagsWrapper=document.getElementById("tags-wrapper")
let tagsBadges=document.getElementById("tags-badges")
let tagsInput= document.getElementById("input-hashtags")
let tagsArray = [];
let i=0;
tagsInput.addEventListener("keydown", event => {
    if(i < 4)
      {
        let keyCode = event.keyCode;
        let value = event.target.value;
      console.log(keyCode);
      if (keyCode === 32) {
          //tagsArray = [...tagsArray, value];
          tagsArray.push(value.trim());
          tagsInput.value = "";
          
          const tagElement =document.createElement("span");
          tagElement.className="badge mx-1 text-bg-"+ getRandomColor();         
          tagElement.innerHTML=("#"+value.trim());
          tagsBadges.appendChild(tagElement);
        


          i++;

      }
      console.log(tagsArray);
      
      }else{
        tagsInput.disabled =true;
        tagInput.className= "invisible";
      }
    
});




/*let tagsWrapper=document.getElementById("tags-wrapper")
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
tagElement.appendChild(tagText)*/

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

   tagsArray.forEach((elemento) => {
     console.log(elemento);
    });

    
    //let emptyPost = {};
    let comentNumber= `${getRandomNumber (2,200)} coments`
    console.log(comentNumber)
    
    let reactionNumber= `${getRandomNumber (2,200)} reactions`
    console.log(reactionNumber)
    
    //Agregar los comentarios y reacciones al post
   
    

    let emptyPost = {
      postCoverImage : postCoverImage.value,
      postTitle : postTitle.value,
      tagsArray : tagsArray,
      postContent : postContent.value,
      coments : comentNumber,
      reactions : reactionNumber
    }

   
    console.log(emptyPost);
console.log(JSON.stringify(emptyPost));
set(dbRef,JSON.stringify(emptyPost))
  .then(() => {
    console.log("Ok")
  })
  .catch((error) => 
    {
      console.log(error)
    }
  );
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
  
let coverImage = entryData.postCoverImage;
let title = entryData.postTitle;
let hashtags = entryData.tagsArray;
let content = entryData.postContent;
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
 
  hashtagsElement.textContent="";
  hashtags.forEach((hashtag) => {    
  hashtagsElement.textContent += "#"+hashtag +" ";
   });

  contentElement.textContent = content;
  comentsElement.innerHTML = coments;
  reactionsElement.innerHTML = reactions;
};
