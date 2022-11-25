<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '$lib/components/Dashboard.svelte';

	export let data: PageData;
</script>

<Dashboard>{data.id}</Dashboard>
