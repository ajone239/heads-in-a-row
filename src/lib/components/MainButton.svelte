<script lang="ts">
    let { disabled, onclick, children } = $props();
</script>

<button {disabled} {onclick}>{@render children()}</button>

<style>
    button {
        width: 120px;
        padding: 10px 0;
        border: 2.5px solid var(--primary-a20);
        border-radius: 5px;
        cursor: pointer;
        background-color: var(--primary-a10);
        color: var(--light-a0);

        &:active {
            background-color: var(--primary-a40);
            color: var(--light-a0);
        }
        &:hover {
            background-color: var(--primary-a30);
            color: var(--light-a0);
        }
        &:disabled {
            background-color: var(--surface-a10);
            color: var(--primary-a20);
        }
    }
</style>
