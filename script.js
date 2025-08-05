document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MENU HAMBURGER ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Troca o ícone de menu para 'X' e vice-versa
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- LÓGICA DO BOTÃO FLUTUANTE DE WHATSAPP ---
    const floatingButton = document.querySelector('.whatsapp-float');
    const triggerElements = document.querySelectorAll('.cta-whatsapp'); 

    if (floatingButton && triggerElements.length > 0) {
        
        const observerOptions = {
            root: null, // Observa em relação ao viewport
            rootMargin: '0px',
            threshold: 0.1 // Dispara quando 10% do elemento está visível
        };

        const observerCallback = (entries) => {
            let isAnyTriggerVisible = false;
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isAnyTriggerVisible = true;
                }
            });

            // Se qualquer botão de gatilho estiver visível, esconde o flutuante.
            if (isAnyTriggerVisible) {
                floatingButton.classList.add('hidden');
            } else {
                floatingButton.classList.remove('hidden');
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Diz ao observer para observar cada elemento gatilho
        triggerElements.forEach(element => {
            observer.observe(element);
        });
    }
});