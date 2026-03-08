<script lang="ts">
    import headsvg from '$lib/assets/heads.svg';
    import tailsvg from '$lib/assets/tails.svg';

    let { flipping, pending, flipTime = 1, headsOrTails } = $props();
</script>

<div
    style:--flip-duration="{flipTime}s"
    class={[
        'coin',
        {
            flip: !headsOrTails,
            pending: pending,
            flipheads: flipping && headsOrTails,
            fliptails: flipping && !headsOrTails
        }
    ]}
    id="coin"
>
    <div class="heads">
        <img src={headsvg} alt="heads" />
    </div>
    <div class="tails">
        <img src={tailsvg} alt="tails" />
    </div>
</div>

<style>
    .coin {
        height: 150px;
        width: 150px;
        position: relative;
        margin: 50px auto;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;

        &.flip {
            transform: rotateX(180deg);
        }
        &.pending {
            animation: spin-pend 250ms infinite;
            animation-timing-function: linear;
        }
        &.flipheads {
            animation: spin-heads var(--flip-duration) forwards;
        }
        &.fliptails {
            animation: spin-tails var(--flip-duration) forwards;
        }
    }

    .coin img {
        width: 145px;
    }

    .heads,
    .tails {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .tails {
        transform: rotateX(180deg);
    }

    @keyframes spin-pend {
        0% {
            transform: rotateX(0deg);
        }

        100% {
            transform: rotateX(360deg);
        }
    }

    @keyframes spin-tails {
        0% {
            transform: translateY(0) rotateX(0deg);
        }

        50% {
            transform: translateY(-40px) rotateX(990deg);
        }

        100% {
            transform: translateY(0px) rotateX(1980deg);
        }
    }

    @keyframes spin-heads {
        0% {
            transform: translateY(0deg) rotateX(0deg);
        }

        50% {
            transform: translateY(-40px) rotateX(1080deg);
        }

        100% {
            transform: translateY(0deg) rotateX(2160deg);
        }
    }
</style>
