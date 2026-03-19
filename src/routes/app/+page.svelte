<script lang="ts">
    import { enhance } from '$app/forms';

    import Coin from '$lib/components/Coin.svelte';
    import MainButton from '$lib/components/MainButton.svelte';
    import SecButton from '$lib/components/SecButton.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    let flipping = $state(false);
    let pending = $state(false);
    let headsOrTails = $state(true);

    let heads = $state(0);
    let tails = $state(0);
    let flipTime = $state(1);

    let flippingId: NodeJS.Timeout;

    async function flip() {
        pending = true;

        const response = await fetch('/api/flip', { method: 'POST' });
        const { isHeads } = await response.json();

        pending = false;
        flipping = true;
        headsOrTails = isHeads;

        flippingId = setTimeout(() => {
            if (isHeads) {
                heads++;
            } else {
                tails++;
            }
            flipping = false;
        }, flipTime * 1000);
    }

    function reset() {
        clearTimeout(flippingId);
        flipping = false;
        heads = 0;
        tails = 0;
    }
</script>

<div class="container">
    <div class="stats">
        <p id="heads-count">Heads: {heads}</p>
        <p id="tails-count">Tails: {tails}</p>
        <p id="spin">Flip Time: {flipping}</p>
        <p id="spin">Flipping: {flipping}</p>
        <p id="spin">Pending: {pending}</p>
    </div>
    <Coin {flipping} {pending} {flipTime} {headsOrTails} />
    <div class="buttons">
        <MainButton disabled={flipping} onclick={flip}>Flip Coin</MainButton>
        <SecButton onclick={reset}>Reset</SecButton>
    </div>

    <div style="margin-top: 10px;">
        <input disabled={flipping} type="range" bind:value={flipTime} min="1" max="10" />
    </div>

    <div style="border: black 1px dashed; padding: 5px;">
        <form method="post" action="?/signOut" use:enhance>
            <p>Name: {data.user.name}</p>
            <p>E-mail: {data.user.email}</p>
            <p>Id: {data.user.id}</p>
            <button>Logout</button>
        </form>
    </div>
</div>

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    .container {
        background-color: var(--surface-a0);
        border: var(--primary-a20) 10px solid;
        width: 85%;
        height: 85%;
        padding: 30px;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        box-shadow:
            15px 15px 40px rgba(0, 0, 0, 0.3),
            inset 3px 3px 4px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        -webkit-perspective: 300px;
        perspective: 300px;
    }

    .stats {
        text-align: right;
        color: var(--dark-a0);
        font-weight: 500;
        line-height: 25px;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
    }
</style>
