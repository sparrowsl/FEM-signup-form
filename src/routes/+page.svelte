<script>
	import "@unocss/reset/tailwind.css";
	import "uno.css";
	import Form from "./Form.svelte";
	import Hero from "./Hero.svelte";
</script>

<main
	class="bg-fem_red bg-[url(/images/bg-intro-mobile.png)] font-poppins md:bg-[url(/images/bg-intro-desktop.png)]"
>
	<section class="flex flex-col mx-auto min-h-screen max-w-7xl items-center md:flex-row">
		<Hero />
		<Form />
	</section>
</main>
