import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  import { getDatabase, get, ref, set} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
 
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
// Función para obtener datos desde Firebase
async function fetchData() {
  const postRef = ref(db, 'post');
  const snapshot = await get(postRef);
  return snapshot.val();
}

//Enlazar el contenido de los inputs a la tarjeta de Post
/*Esta función modifica la card que está en nuestro HTML*/
// Función para crear e insertar el contenido en el documento HTML
async function insertPost() {
  const data = await fetchData();
  console.log(JSON.parse(data));
  // console.log(entryData);
  /*Recibe como argumento entryData, que representa el objeto de nuestra entrada de blog*/
  updatePreview(JSON.parse(data))
};

/*Extraemos los valores de title, content, cover, que usaremos para modificar nuestro HTML*/
//let { coverImage, title, hashtags, content, coments, reactions } = entryData;
const updatePreview = (entryData) => {
  debugger
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
  let contentElement = document.getElementById("card-post-content"); /*el contenido*/
  let comentsElement = document.getElementById("card-coments"); /*comentarios*/
  let reactionsElement = document.getElementById("card-reactions"); /*reacciones*/
  console.log(comentsElement);
  /*cambiamos el contenido de cada elemento, usando lo que tenemos en entryData*/
  coverElement.setAttribute("src", coverImage);
  titleElement.textContent = title;

  hashtagsElement.textContent = "";
  hashtags.forEach((hashtag) => {
    hashtagsElement.textContent += "#" + hashtag + " ";
  });

  contentElement.textContent = content;
  comentsElement.innerHTML = coments;
  reactionsElement.innerHTML = reactions;
}
// Initialized program
insertPost();