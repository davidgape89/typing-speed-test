<script lang="ts">
    import { afterUpdate } from "svelte";

    export let words = [];
    export let wordStack = [];

    afterUpdate(() => {
        const activeEl: HTMLElement | null = document.querySelector(".active");
        if (activeEl) activeEl.scrollIntoView({ block: "center" });
    });
</script>

<div class="text-viewer">
    {#each words as word, i}
        <span
            class:active={wordStack.length === i}
            class:valid={wordStack[i] && wordStack[i] === words[i]}
            class:invalid={wordStack[i] && wordStack[i] !== words[i]}
        >
            {word}
        </span>
        <span />
    {/each}
</div>

<style type="text/scss">
    $textSize: 2rem;

    .text-viewer {
        font-size: $textSize;
        height: $textSize * 3.5;
        overflow: hidden;
    }

    span {
        border-radius: 1rem;
        padding: 2px;
    }

    .active {
        background-color: lighten(grey, 30);
    }

    .invalid {
        background-color: lighten(red, 30);
    }

    .valid {
        background-color: lighten(green, 50);
    }
</style>
