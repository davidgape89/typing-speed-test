<script lang="ts">
    import { afterUpdate } from "svelte";

    export let words;
    export let wordStack;
    export let activeInput;

    afterUpdate(() => {
        const activeEl: HTMLElement | null = document.querySelector('.isActive');
        if(activeEl) activeEl.scrollIntoView({block: 'center'});
    });
</script>

<div class="text-viewer">
    {#each words as word, i}
        <span
            class:isActive={wordStack.length === i && words[i].startsWith(activeInput)}
            class:isValid={wordStack[i] && wordStack[i] === words[i]}
            class:isInvalid={wordStack[i] && wordStack[i] !== words[i]}>
            {word}
        </span>
        <span> </span>
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

    span.isActive {
        background-color: lighten(grey, 30);
    }

    .isInvalid {
        background-color: lighten(red, 30);
    }

    .isValid {
        background-color: lighten(green, 50);
    }
</style>