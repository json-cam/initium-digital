<template>
      <!-- Hero Section -->
    <section id="home" class="hero">
        <span class="hero-overlay"/>
        <div class="hero-content">
            <h1 class="floating">Custom Web & Software Solutions</h1>
            <p>Empowering small to medium businesses with tailored WaaS and SaaS solutions</p>
            <NuxtLink to="#contact" class="cta-button">Get Your Free Consultation</NuxtLink>
        </div>
    </section>
</template>

<style scoped>
/* Hero Section */
        .hero {
            min-height: 100vh;
            display: grid;
            place-items: center;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
            background-image: url('~/assets/img/8.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            /* background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)); */
            /* background-color: rgba(160, 182, 255, 0.534); */
            z-index: -1;
        }

        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.3);
            opacity: 0.5;
            /* z-index: 0; */
        }

        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            animation: fadeInUp 1s ease;
        }

        .hero-content p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            animation: fadeInUp 1s ease 0.2s both;
        }

        .cta-button {
            display: inline-block;
            background: #ff6b6b;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: fadeInUp 1s ease 0.4s both;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        }

        .hero-content {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            z-index: 1;
        }
</style>