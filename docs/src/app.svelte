<script lang="ts">
  import Color from './color.svelte'
  import { colors } from './constants'
</script>

<main class="py-12 px-8 max-w-7xl mx-auto">
  <h1 class="font-bold text-8xl pb-12 text-center text-ขาบดำ">ไทยโทน</h1>
  <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
    {#each Object.values(colors) as color}
      <Color color={color} />
    {/each}
  </div>
</main>
