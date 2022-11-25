import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';

export function load({ params }: PageServerLoadEvent) {
	if (params.id) return { id: params.id };
	throw error(404, 'Not Found');
}
