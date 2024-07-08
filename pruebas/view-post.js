// Obtener el post guardado en localStorage
let savedPost = localStorage.getItem("currentPost");

if (savedPost) {
  let post = JSON.parse(savedPost);

  // Actualizar el contenido del post en la página
  document.getElementById("postImage").src = post.image;
  document.getElementById("postTitle").textContent = post.title;
  document.getElementById("postDescription").textContent = post.description;
  document.getElementById("postTags").innerHTML = `<small class="text-muted">Tags: ${post.tags.join(", ")}</small>`;
  document.getElementById("postDate").innerHTML = `<small class="text-muted">Fecha: ${post.postDate}</small>`;
} else {
  // Manejo de caso donde no hay post guardado
  document.getElementById("postDetails").innerHTML = "<p>No hay post disponible.</p>";
}
