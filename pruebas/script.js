// Función para generar una fecha aleatoria entre 2023 y 2024
function generateRandomDate() {
    let start = new Date('2023-01-01');
    let end = new Date('2024-12-31');
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  // Obtener el formulario y añadir un event listener para el submit
  document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
  
    // Obtener los valores de los campos del formulario
    let image = document.getElementById("image").value;
    let title = document.getElementById("title").value;
    let tags = document.getElementById("tags").value.split(",").map(tag => tag.trim());
    let description = document.getElementById("description").value;
    let postDate = document.getElementById("postDate").value;
  
    // Crear un objeto con los datos del post
    let post = {
      image: image,
      title: title,
      tags: tags,
      description: description,
      postDate: postDate // Se mantiene la fecha seleccionada manualmente o generada aleatoriamente
    };
  
    // Guardar el objeto post en localStorage
    localStorage.setItem("currentPost", JSON.stringify(post));
  
    // Redirigir a la página de visualización del post
    window.location.href = "view-post.html";
  });
  
  // Obtener el botón de generar fecha aleatoria y añadir un event listener
  document.getElementById("generateDateBtn").addEventListener("click", function() {
    let randomDate = generateRandomDate();
    let formattedDate = randomDate.toISOString().slice(0, 10); // Formato YYYY-MM-DD
    document.getElementById("postDate").value = formattedDate;
  });
  
  