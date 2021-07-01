const grid = new Muuri('.grid',{
    layout: {
        rounding: false
    }
    
});

//Enlaces

const enlaces = document.querySelectorAll ('#categorias a');
enlaces.forEach((elemento) =>{
    elemento.addEventListener('click', (evento) =>{
        evento.preventDefault();
        enlaces.forEach((enlace) => enlace.classList.remove ('activo') );
        evento.target.classList.add('activo');
        
        const categoria = evento.target.innerHTML.toLowerCase(); 
        grid.filter(`[data-categoria="${categoria}"]`)
        categoria === 'todos los productos' ? grid.filter('[data-categoria]') : grid.filter (`[data-categoria='${categoria}']`);
    });
});

//Barra de busqueda

document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
    const busqueda = evento.target.value;
    grid.filter ((item) => item.getElement().dataset.etiquetas.includes(busqueda) );
});

// Imagenes 

const overlay = document.getElementById('overlay');
document.querySelectorAll('.grid .item img').forEach( (elemento) => {
    elemento.addEventListener('click', () =>{
        const ruta = elemento.getAttribute ('src');
        const descripcion = elemento.parentNode.parentNode.dataset.descripcion; 
        
        overlay.classList.add('activo');
        document.querySelector('#overlay img').src = ruta;
        document.querySelector('#overlay .descripcion').innerHTML = descripcion;
    });
    
});

// Cerrar 

document.querySelector ('#btn-cerrar').addEventListener('click', () =>{
    overlay.classList.remove('activo');
});