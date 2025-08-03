<template>
	<div>
        <NavBar />
		<slot />
        <FooterBar />
	</div>
</template>

<style>
   * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            min-width: fit-content;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
        }

        .container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 0 20px;
        }

        
         /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
</style>
