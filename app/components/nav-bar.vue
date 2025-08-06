<template>
	<header>
		<nav class="container">
			<div class="logo">
				<NuxtLink to="/">
					<img
						src="~/assets/img/logo-v1.png"
						alt="InitiumDigital Logo"
					>
				</NuxtLink>
			</div>
			<ul class="nav-links">
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="#services">Services</NuxtLink>
				</li>
				<li>
					<NuxtLink to="#about">About</NuxtLink>
				</li>
				<li>
					<NuxtLink to="#contact">Contact</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
 nav {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            padding: 1rem 0;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #667eea;
            grid-column: 1;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
            justify-self: end;
            grid-column: 2;
        }

        .nav-links a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: #667eea;
        }
</style>
