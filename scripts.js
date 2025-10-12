// TIMER LINEAL DE 15 MINUTOS
        const tiempoTotal = 15 * 60;
        let tiempoRestante = tiempoTotal;
        const tiempoDisplay = document.getElementById('tiempoDisplay');
        const barraProgreso = document.getElementById('barraProgreso');

        function actualizarTimer() {
            if (tiempoRestante <= 0) {
                tiempoRestante = tiempoTotal;
            }

            const minutos = Math.floor(tiempoRestante / 60);
            const segundos = tiempoRestante % 60;
            
            tiempoDisplay.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;

            const progreso = ((tiempoTotal - tiempoRestante) / tiempoTotal) * 100;
            barraProgreso.style.width = `${progreso}%`;

            tiempoRestante--;
        }

        actualizarTimer();
        setInterval(actualizarTimer, 1000);

        // Alternar FAQ
        function alternarFaq(elemento) {
            const respuesta = elemento.nextElementSibling;
            const icono = elemento.querySelector('.icono-faq');
            const todasRespuestas = document.querySelectorAll('.respuesta-faq');
            const todosIconos = document.querySelectorAll('.icono-faq');
            
            todasRespuestas.forEach(r => {
                if (r !== respuesta) {
                    r.classList.remove('activo');
                }
            });
            
            todosIconos.forEach(i => {
                if (i !== icono) {
                    i.classList.remove('activo');
                }
            });
            
            respuesta.classList.toggle('activo');
            icono.classList.toggle('activo');
        }

        // Pausar carrusel al hover
        const carruselTestimonios = document.querySelector('.carrusel-testimonios');
        carruselTestimonios.addEventListener('mouseenter', () => {
            carruselTestimonios.style.animationPlayState = 'paused';
        });
        carruselTestimonios.addEventListener('mouseleave', () => {
            carruselTestimonios.style.animationPlayState = 'running';
        });

        // Scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(enlace => {
            enlace.addEventListener('click', function (e) {
                e.preventDefault();
                const objetivo = document.querySelector(this.getAttribute('href'));
                if (objetivo) {
                    objetivo.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });