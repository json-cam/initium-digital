<template>
	<!-- Contact Section -->
	<section
		id="contact"
		class="contact"
	>
		<div class="container">
			<h2
				class="section-title"
				style="color: white;"
			>
				Let's Build Something Amazing
			</h2>
			<div class="contact-content">
				<div class="contact-form">
					<h3>Get Your Free Consultation</h3>
					<form
						name="contact-ID"
						method="post"
						netlify
					>
						<div class="form-group">
							<label for="name">Name</label>
							<input
								id="name"
								type="text"
								name="name"
								placeholder="Your Name"
								required
							>
						</div>
						<div class="form-group">
							<label for="email">Email</label>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="your@email.com"
								required
							>
						</div>
						<div class="form-group">
							<label for="business">Business/Company</label>
							<input
								id="business"
								type="text"
								name="business"
								placeholder="Your Business Name"
							>
						</div>
						<div class="form-group">
							<label for="service">Interested In</label>
							<select
								id="service"
								name="service"
								style="width: 100%; padding: 12px; border: none; border-radius: 8px; background: rgba(255, 255, 255, 0.1); color: white; font-size: 1rem;"
							>
								<option value="">
									Select a Service
								</option>
								<option value="waas">
									Website as a Service
								</option>
								<option value="saas">
									Custom SaaS Development
								</option>
								<option value="integration">
									Integration & Automation
								</option>
								<option value="consultation">
									General Consultation
								</option>
							</select>
						</div>
						<div class="form-group">
							<label for="message">Project Details</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								placeholder="Tell me about your project requirements..."
							/>
						</div>
						<button
							type="submit"
							class="submit-btn"
						>
							Send Message
						</button>
					</form>
				</div>
				<div class="contact-info">
					<h3>Ready to Get Started?</h3>
					<p style="margin-bottom: 2rem;">
						Let's discuss your project and see how I can help your business grow with custom web and software solutions.
					</p>

					<div class="contact-item">
						<span style="font-size: 1.5rem;">📧</span>
						<div>
							<strong>Email</strong><br>
							hello@initiumdigital.tech
						</div>
					</div>
					<!-- <div class="contact-item">
                        <span style="font-size: 1.5rem;">📱</span>
                        <div>
                            <strong>Phone</strong><br>
                            (555) 123-4567
                        </div>
                    </div> -->
					<div class="contact-item">
						<span style="font-size: 1.5rem;">⏰</span>
						<div>
							<strong>Response Time</strong><br>
							Within 24 hours
						</div>
					</div>

					<div style="margin-top: 2rem; padding: 1.5rem; background: rgba(255, 255, 255, 0.1); border-radius: 10px;">
						<h4>Free Consultation Includes:</h4>
						<ul style="list-style: none; margin-top: 1rem;">
							<li style="padding: 0.3rem 0;">
								✓ Project requirements analysis
							</li>
							<li style="padding: 0.3rem 0;">
								✓ Technology recommendations
							</li>
							<li style="padding: 0.3rem 0;">
								✓ Timeline and budget estimate
							</li>
							<li style="padding: 0.3rem 0;">
								✓ No-obligation proposal
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
 /* Contact Section */
        .contact {
            padding: 100px 0;
            background: #333;
            color: white;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }

        .contact-form {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #ccc;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1rem;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: #ccc;
        }

        .submit-btn {
            background: #ff6b6b;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: background 0.3s ease;
        }

        .submit-btn:hover {
            background: #ff5252;
        }

        .contact-info h3 {
            margin-bottom: 2rem;
            font-size: 2rem;
        }

        .contact-item {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .contact-item i {
            font-size: 1.5rem;
            color: #667eea;
        }
</style>
