<template>
    <div>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
    </div>
</template>

<style>
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2.5rem;
            }
            
            .nav-links {
                display: none;
            }
            
            nav {
                grid-template-columns: 1fr;
                justify-items: center;
            }
            
            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
            }
            
            .stats {
                grid-template-columns: 1fr;
            }
        }

       

        /* Floating Animation */
        .floating {
            animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
</style>