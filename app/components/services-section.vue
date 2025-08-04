<template>
     <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Our Services</h2>
            
            <div class="services-grid">
                <!-- WaaS Service -->
                <div class="service-card">
                    <div class="service-icon">
                        <img src="~/assets/img/service-icons/001-layers.png" alt="website as a service development">
                    </div>
                    <h3>Website as a Service (WaaS)</h3>
                    <div class="price-tag">Starting at $149/month</div>
                    <p>Complete website solutions with ongoing maintenance, updates, and support. Focus on your business while we handle your web presence.</p>
                    
                    <h4>Available Tiers:</h4>
                    <ul class="features-list">
                        <li><strong>Essential:</strong> $149-299/month - Professional sites for small businesses</li>
                        <li><strong>Professional:</strong> $299-599/month - Advanced features and e-commerce</li>
                        <li><strong>Enterprise:</strong> $599-1,299/month - Custom applications and integrations</li>
                    </ul>
                </div>

                <!-- SaaS Service -->
                <div class="service-card">
                    <div class="service-icon">
                         <img src="~/assets/img/service-icons/002-code.png" alt="Custom SaaS Development">
                    </div>
                    <h3>Custom SaaS Development</h3>
                    <div class="price-tag">Starting at $2,000 setup + $99/month</div>
                    <p>Tailored software solutions designed specifically for your business processes. From simple tools to complex systems.</p>
                    
                    <h4>Common Solutions:</h4>
                    <ul class="features-list">
                        <li>Data Management Systems</li>
                        <li>Business Process Automation</li>
                        <li>Customer Portals</li>
                        <li>Reporting Dashboards</li>
                        <li>Booking/Scheduling Systems</li>
                        <li>Custom CRM Tools</li>
                    </ul>
                    <p><em>Final pricing determined after requirements analysis</em></p>
                </div>

                <!-- Hybrid Services -->
                <div class="service-card">
                    <div class="service-icon">
                         <img src="~/assets/img/service-icons/004-api-1.png" alt="WaaS Icon">
                    </div>
                    <h3>Integration & Automation</h3>
                    <div class="price-tag">Starting at $1,000 setup + $99/month</div>
                    <p>Connect your existing systems and automate workflows. Progressive web apps, API integrations, and custom solutions.</p>
                    
                    <h4>What We Offer:</h4>
                    <ul class="features-list">
                        <li>Progressive Web Applications (PWAs)</li>
                        <li>API Integration Services</li>
                        <li>Workflow Automation</li>
                        <li>Third-party Connections</li>
                        <li>Data Synchronization</li>
                        <li>Performance Monitoring</li>
                    </ul>
                </div>
            </div>

            <!-- Add-on Services -->
            <div style="margin-top: 4rem; text-align: center;">
                <h3 style="margin-bottom: 2rem; color: #333;">Add-On Services</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px;">
                        <h4>Security & Compliance</h4>
                        <p>SSL, monitoring, backups</p>
                        <strong>Additional  Cost</strong>
                    </div>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px;">
                        <h4>Performance & Analytics</h4>
                        <p>Hosting, CDN, detailed reporting</p>
                        <strong>Additional  Cost</strong>
                    </div>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px;">
                        <h4>Training & Support</h4>
                        <p>Staff training, consulting</p>
                        <strong>Additional  Cost</strong>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
 .services {
            padding: 100px 0;
            background: white;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #333;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
            margin-top: 4rem;
        }

        .service-card {
            display: flex;
            flex-direction: column;
            background: white;
            padding: 2.5rem;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid #f0f0f0;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #667eea;
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #333;
        }

        .service-card p {
            color: #666;
            margin-bottom: 1.5rem;
        }

        .price-tag {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 1rem;
        }

        .features-list {
            list-style: none;
            margin: 1rem 0;
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
        }

        .features-list li {
            color: #666;
            position: relative;
            padding-left: 1.5rem;
        }

        .features-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #4CAF50;
            font-weight: bold;
        }
</style>