<script lang="ts">
  import type { KeyMap } from './KeyMap';
  import ActiveKeyMapper from './components/ActiveKeyMapper.svelte';
  import Timer from './components/Timer.svelte';
  import Keyboard from './components/Keyboard.svelte';
  import TextViewer from './components/TextViewer.svelte';
  import { englishText } from './words';

  let keyMap: KeyMap;
  let isRunning = false;
  let time: number;
  let value: string;
  let wordStack: string[] = [];
  let disabled = false;
  let words = englishText.replace(/\n/g, '').split(' ');

  function reset() {
    value = '';
    wordStack = [];
    disabled = false;
    time = 60;
    isRunning = false;
  }

  function handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'Escape':
        reset();
        return;
      case 'Backspace':
        if (wordStack.length > 0 && !value.length) {
          e.preventDefault();
          const lastIndex = wordStack.length - 1;
          value = wordStack[lastIndex];
          wordStack = wordStack.slice(0, lastIndex);
        }
        return;
      case ' ':
        e.preventDefault();
        e.stopPropagation();
        if (value.length) {
          wordStack = [...wordStack, value];
          value = '';
        }
        return;
    }
  }

  $: isRunning = isRunning || (value && value.length !== 0);
  $: disabled = time === 0;
</script>

<main>
  <ActiveKeyMapper bind:keyMap />
  <TextViewer {words} {wordStack} />
  <div class="input-wrapper">
    <!-- svelte-ignore a11y-autofocus -->
    <input bind:value {disabled} on:keydown={handleKeyDown} autofocus />
    <Timer bind:isRunning bind:time />
  </div>
  <Keyboard {keyMap} />
</main>

<style type="text/scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;
  }

  input {
    margin: 0;
    margin-right: 2rem;
  }

  .input-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 3rem;
  }

  :global(html) {
    @media (max-width: 890px) {
      font-size: 13px;
    }
  }
</style>
