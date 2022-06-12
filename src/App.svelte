<script>
  import "../public/build/bundle.css";
  import Form from "./Form.svelte";
  import Hero from "./Hero.svelte";
</script>

<main class="bg-[hsl(0,_100%,_74%)]">
  <section
    class="container mx-auto flex min-h-screen flex-col items-center gap-10 md:flex-row lg:max-w-7xl"
  >
    <Hero />
    <Form />
  </section>
</main>

<style>
</style>
