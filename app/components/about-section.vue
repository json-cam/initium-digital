<template>
   <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>Why InitiumDigital?</h2>
                    <p>As a dedicated freelance developer based in Thorold Ontario Canada, I specialize in creating custom web and software solutions that grow with your business. Unlike large agencies, you get direct access to the person building your solution.</p>
                    <p>I focus on small to medium businesses who need reliable, scalable solutions without the enterprise price tag. Every project is tailored to your specific needs and budget.</p>
                    <p>My approach combines modern technology with practical business solutions, ensuring you get maximum value from your investment.</p>
                </div>
                <div class="stats">
                    <!-- <div class="stat">
                        <h3>50+</h3>
                        <p>Projects Completed</p>
                    </div> -->
                    <div class="stat">
                        <h3>98%</h3>
                        <p>Client Satisfaction</p>
                    </div>
                    <div class="stat">
                        <h3>24/7</h3>
                        <p>Support Available</p>
                    </div>
                    <div class="stat">
                        <h3>10+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
/* About Section */
        .about {
            padding: 100px 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #333;
        }

        .about-text p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 1.5rem;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-top: 2rem;
        }

        .stat {
            text-align: center;
            padding: 1.5rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .stat h3 {
            font-size: 2rem;
            color: #667eea;
            margin-bottom: 0.5rem;
        }
</style>