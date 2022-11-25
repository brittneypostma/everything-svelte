import { error } from '@sveltejs/kit';
import type { PageLoadEvent } from './$types';

export function load({ params }: PageLoadEvent) {
	if (params.id) return { id: params.id };
	throw error(404, 'Not Found');
}
