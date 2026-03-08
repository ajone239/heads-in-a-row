<script lang="ts">
    import Coin from '$lib/components/Coin.svelte';

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
        const json = await response.json();
        const { isHeads } = json;

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
        <button disabled={flipping} onclick={flip} id="flip-button">Flip Coin</button>
        <button onclick={reset} id="reset-button">Reset</button>
    </div>

    <label>
        <input disabled={flipping} type="range" bind:value={flipTime} min="1" max="10" />
    </label>
</div>

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    .container {
        background-color: #ffffff;
        width: 400px;
        padding: 50px;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        box-shadow: 30px 30px 40px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        -webkit-perspective: 300px;
        perspective: 300px;
    }

    .stats {
        text-align: right;
        color: #101020;
        font-weight: 500;
        line-height: 25px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
    }

    button {
        width: 120px;
        padding: 10px 0;
        border: 2.5px solid #424ae0;
        border-radius: 5px;
        cursor: pointer;
    }

    #flip-button {
        background-color: #424ae0;
        color: #ffffff;
    }

    #flip-button:disabled {
        background-color: #e1e0ee;
        border-color: #e1e0ee;
        color: #101020;
    }

    #reset-button {
        background-color: #ffffff;
        color: #424ae0;
    }
</style>
