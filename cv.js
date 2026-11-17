// Abrir o cerrar secciones al pulsar en la barra blanca con flecha verde
    function toggleSeccion(elementoTitulo) {
        const bloque = elementoTitulo.parentElement;
        bloque.classList.toggle('cerrado');
    }

// Copiar teléfono o correo al portapapeles con confirmación visual
    function copiarTexto(texto, boton) {
        navigator.clipboard.writeText(texto).then(() => {
            const textoOriginal = boton.textContent;
            boton.textContent = '¡Copiado!';
            boton.style.backgroundColor = '#a8e62e';
            boton.style.color = 'black';

            setTimeout(() => {
                boton.textContent = textoOriginal;
                boton.style.backgroundColor = 'transparent';
                boton.style.color = '#a8e62e';
            }, 1800);
        });
    }

// Filtrar habilidades entre Todas, DAW y Otras
    function filtrarSkills(categoria, botonActivo) {
        // Actualizar estado de los botones
            document.querySelectorAll('.btn-filtro').forEach(btn => {
                btn.classList.remove('activo');
            });
            botonActivo.classList.add('activo');

        // Mostrar u ocultar etiquetas
            document.querySelectorAll('.skill-tag').forEach(tag => {
                if (categoria === 'todas' || tag.dataset.tipo === categoria) {
                    tag.classList.remove('oculto');
                } else {
                    tag.classList.add('oculto');
                }
            });
    }

// Mostrar u ocultar la información detallada de cada habilidad
    document.querySelectorAll('.skill-tag').forEach(boton => {
        boton.addEventListener('click', () => {
            const cajaDetalle = document.getElementById('detalle-habilidad');
            const titulo = document.getElementById('detalle-titulo');
            const texto = document.getElementById('detalle-texto');

            // Si ya estaba seleccionada, la cerramos
            if (boton.classList.contains('seleccionada')) {
                boton.classList.remove('seleccionada');
                cajaDetalle.classList.add('oculto');
                return;
            }

            // Quitamos el estado activo de cualquier otra habilidad
            document.querySelectorAll('.skill-tag').forEach(b => b.classList.remove('seleccionada'));

            // Marcamos esta habilidad y rellenamos su info
            boton.classList.add('seleccionada');
            titulo.textContent = boton.textContent;
            texto.textContent = boton.dataset.info;
            cajaDetalle.classList.remove('oculto');
        });
    });

    function cerrarDetalleSkill() {
        document.querySelectorAll('.skill-tag').forEach(b => b.classList.remove('seleccionada'));
        document.getElementById('detalle-habilidad').classList.add('oculto');
    }