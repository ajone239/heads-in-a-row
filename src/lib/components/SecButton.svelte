<script lang="ts">
    let { disabled = false, onclick, children } = $props();
</script>

<button {disabled} {onclick}>{@render children()}</button>

<style>
    button {
        width: 120px;
        padding: 10px 0;
        border: 2.5px solid var(--primary-a20);
        border-radius: 5px;
        cursor: pointer;
        background-color: var(--surface-a0);
        color: var(--primary-a10);

        &:active {
            background-color: var(--surface-a20);
            color: var(--primary-a0);
        }
        &:hover {
            background-color: var(--surface-a10);
            color: var(--primary-a10);
        }
        &:disabled {
            background-color: var(--surface-a40);
            color: var(--primary-a20);
        }
    }
</style>
