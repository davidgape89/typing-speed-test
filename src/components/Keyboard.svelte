<script lang="ts">
    import { ansiMap } from '../ansiMap';
    import type { KeyMap } from "../KeyMap";

    export let keyMap: KeyMap = {};
</script>

<div class="keyboard">
    {#each ansiMap as row}
        <div class="row">
            {#each row as {key}}
                <div
                    class="key"
                    class:active={keyMap[key]}
                    class:spacebar={key === ' '}
                >
                    {key}
                </div>
            {/each}
        </div>
    {/each}
</div>

<style type="text/scss">
    .keyboard {
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
    }

    .key {
        align-items: center;
        border-radius: 1rem;
        display: flex;
        height: 6rem;
        justify-content: center;
        transition: background-color 300ms;
        width: 6rem;

        .spacebar {
            width: 20rem;
        }

        .active {
            background-color: lightpink;
        }
    }
</style>