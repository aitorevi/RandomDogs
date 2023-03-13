/*
* Este API tiene la particularidad de devolver perros aleatorios, el objetivo de este ejercicio es devolver un proyecto
* sencillo con un index html y su fichero js. Su funcionalidad consistirá en tener 3 botones cada uno con un tipo de
* tecnología (fetch, jquery, XMLHttpRequest). El objetivo de la funcionalidad es que cuando yo cliquee por ejemplo en el
*  botón de fetch haga una llamada fetch para devolver la imagen en el navegador. El objetivo del ejercicio es descubrir
*  y gestionar desde la parte de frente diferentes protocolos y ver cómo se usan. (Nota si hay gestión de errores mejor)
*
*/

// Activar la extensión Allow Cors de Chrome antes de ejecutar esta función
async function render_image_jquery() {
    $.ajax({
        url: 'http://localhost:3000',
        method: 'GET',
        dataType: 'json',
        success: await function(response) {
            console.log(response.url); // Comprobar lo que devuelve en consola, se puede eliminar
            const my_image = document.createElement("img");
            my_image.src = response.url;
            my_image.height = 300;
            document.body.append(my_image);
        },
        error: function(error) {
            console.log(error);
        }
    })
}