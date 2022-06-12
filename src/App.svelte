<script>
  import "../public/build/bundle.css";
  import Form from "./Form.svelte";
  import Hero from "./Hero.svelte";
</script>

<main class="bg-fem_red bg-mobile md:bg-desktop font-poppins">
  <section
    class="container mx-auto flex min-h-screen flex-col items-center py-8 md:flex-row lg:max-w-7xl"
  >
    <Hero />
    <Form />
  </section>
</main>

<style>
</style>
