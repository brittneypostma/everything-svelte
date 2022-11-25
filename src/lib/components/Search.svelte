<script lang="ts">
	import Search from '$lib/images/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
	<div class="mr-2 mt-auto text-pastelPurple"><Search /></div>
	<input
		type="text"
		name="search"
		placeholder="Search by keyword"
		class="w-full border-b-2 border-dashed border-b-pastelPurple text-base text-black outline-none focus:border-solid focus:border-b-lavenderIndigo lg:w-72 lg:text-xl"
	/>
	<button class="text-base font-black text-pastelPurple lg:text-xl">Search</button>
</div>
