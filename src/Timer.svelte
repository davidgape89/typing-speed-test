<script lang="ts">
    import { onMount } from 'svelte';

    export let isRunning = false;
    let time = 50;

    function reset() {
        time = 0;
    }

    function formatTime(t: number): string {
        const timeString = t.toString();
        return timeString.length === 1 ? `0${timeString}` : timeString;
    }

    onMount(() => {
        const interval = setInterval(() => {
            if(isRunning) time += 1
        }, 1000);
        return () => clearInterval(interval);
    });
</script>

<div>{formatTime(Math.trunc(time / 60))}:{formatTime(time % 60)}</div>