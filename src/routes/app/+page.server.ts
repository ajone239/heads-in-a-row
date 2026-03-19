import { auth } from '$lib/server/auth';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
    signOut: async (event) => {
        console.log("blah")
        const res = await auth.api.signOut({
            headers: event.request.headers
        });

        console.log(res)

        return redirect(302, '/login');
    }
};
