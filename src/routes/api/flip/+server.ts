import { db } from '$lib/server/db';
import { flips, type NewFlip } from '$lib/server/db/schema';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals }) => {
    const user = locals.user

    if (!user) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }

    const isHeads = Math.random() < 0.5;

    const flip: NewFlip = {
        userId: user.id,
        headsOrTails: isHeads,
    }

    await db.insert(flips).values(flip)

    return json({ isHeads }, { status: 201 });
}

