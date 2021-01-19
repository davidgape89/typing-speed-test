<script lang="ts">
    import { onMount } from 'svelte';

    export let isRunning = false;
    export let time = 0;
    export let timeDifference = 1000;

    function formatTime(t: number): string {
        const timeString = t.toString();
        return timeString.length === 1 ? `0${timeString}` : timeString;
    }

    onMount(() => {
        const interval = setInterval(() => {
            if(isRunning && time > 0) time -= 1;
        }, timeDifference);

        return () => clearInterval(interval);
    });
</script>

<div>{formatTime(Math.trunc(time / 60))}:{formatTime(time % 60)}</div>