import { json } from '@sveltejs/kit';

export async function POST() {
    const isHeads = Math.random() < 0.5;

    return json({ isHeads }, { status: 201 });
}

