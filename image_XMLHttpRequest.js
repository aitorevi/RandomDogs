/*
* Este API tiene la particularidad de devolver perros aleatorios, el objetivo de este ejercicio es devolver un proyecto
* sencillo con un index html y su fichero js. Su funcionalidad consistirá en tener 3 botones cada uno con un tipo de
* tecnología (fetch, jquery, XMLHttpRequest). El objetivo de la funcionalidad es que cuando yo cliquee por ejemplo en el
*  botón de fetch haga una llamada fetch para devolver la imagen en el navegador. El objetivo del ejercicio es descubrir
*  y gestionar desde la parte de frente diferentes protocolos y ver cómo se usan. (Nota si hay gestión de errores mejor)
*
*/

// Activar la extensión Allow Cors de Chrome antes de ejecutar esta función
async function render_image_XMLHttpRequest() {
    const response = new XMLHttpRequest();
    response.onreadystatechange = await function() {
        if (response.readyState === XMLHttpRequest.DONE) {
            console.log(JSON.parse(response.response).url); // Comprobar lo que devuelve en consola, se puede eliminar
            const my_image = document.createElement("img");
            my_image.src = JSON.parse(response.response).url;
            my_image.height = 300;
            document.body.append(my_image);
        }
    }
    response.open('GET', 'http://localhost:3000', true);
    response.send(null);
}