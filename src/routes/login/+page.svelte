<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
</script>

<h1>Login</h1>
<form method="post" action="?/signInEmail" use:enhance>
    <div>
        <label>
            Email
            <input type="email" name="email" />
        </label>
    </div>
    <div>
        <label>
            Password
            <input type="password" name="password" />
        </label>
    </div>
    <div>
        <label>
            Name (for registration)
            <input name="name" />
        </label>
    </div>
    <button>Login</button>
    <button formaction="?/signUpEmail">Register</button>
</form>
<p style="color: red">{form?.message ?? ''}</p>
