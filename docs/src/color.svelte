<script lang="ts">
  import clsx from 'clsx'
  import type { Color } from './types'

  export let color: Color

  let copied = false

  const handleClick = () => {
    navigator.clipboard.writeText(color.l)
    copied = true
    setTimeout(() => {
      copied = false
    }, 2000)
  }
</script>

<div>
  <button
    class={clsx(
      color.b,
      color.d ? 'text-black' : 'text-white',
      'h-16 w-full rounded ring-2 ring-offset-4 ring-gray-500 rounded-xl tooltip'
    )}
    data-tip={copied ? "Copied!" : "Click to copy"}
    on:click={handleClick}
  />
  <p class="text-center pt-1">{color.l}</p>
</div>
