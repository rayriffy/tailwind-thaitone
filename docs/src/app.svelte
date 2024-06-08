<script lang="ts">
  import Color from './color.svelte'
  import { colors } from './constants'

  let isHex = false
</script>

<main class="py-12 px-8 max-w-7xl mx-auto">
  <h1 class="font-bold text-8xl pb-12 text-center text-ขาบดำ">ไทยโทน</h1>
  <div class="pb-12">
    <div class="flex space-x-4">
      <p>Color token</p>
      <input type="checkbox" class="toggle" checked={isHex} on:click={() => isHex = !isHex} />
      <p>HEX</p>
    </div>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
    {#each Object.values(colors) as color}
      <Color color={color} isHex={isHex} />
    {/each}
  </div>
</main>
