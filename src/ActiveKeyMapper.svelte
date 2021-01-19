<script lang="ts">
    import type { KeyMap } from './KeyMap';

    export const keyMap: KeyMap = {};

    function handleKeyDown(event: KeyboardEvent) {
        keyMap[event.key] = true;
    }

    function handleKeyUp(event: KeyboardEvent) {
        keyMap[event.key] = false;
    }
</script>

<svelte:window 
    on:keydown={handleKeyDown}
    on:keyup={handleKeyUp}
/>