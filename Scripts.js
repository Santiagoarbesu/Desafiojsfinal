
let tagsInput = document.getElementById ("tags-input");
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

document.getElementById("createPostBtn").addEventListener("click", function() {
  window.location.href = "formulario_para_post/post.html"; // Redirige al hacer clic
});


