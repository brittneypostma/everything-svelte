<script>
	import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
	import { onMount } from 'svelte';
	import InvoiceRow from './InvoiceRow.svelte';
	import CircledAmount from '$lib/components/CircledAmount.svelte';
	import Search from '$lib/components/Search.svelte';
	import InvoiceHeader from './InvoiceHeader.svelte';
	import { sumInvoices, addThousandsSeperator, centsToDollars } from '$lib/utils/moneyHelpers';

	onMount(() => {
		loadInvoices();
		console.log($invoices);
	});
</script>

<svelte:head>
	<title>Invoices | The Dollar Holler</title>
</svelte:head>

<div
	class="mb-7 lg:mb-16 gap-y-6 md:gap-y-4 flex flex-col-reverse gap-x-4 md:flex-row items-start md:items-center justify-between">
	<Search />
	<!-- new invoice button -->
	<div>
		<button
			class="shadow-colored transition:all relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 py-2 lg:px-10 lg:py-3 text-base lg:text-xl font-black text-white hover:-translate-y-1 hover:shadow-coloredHover"
			>+ Invoice</button>
	</div>
</div>

<main>
	<InvoiceHeader />
	{#each $invoices as invoice}
		<InvoiceRow invoice="{invoice}" />
	{/each}
	<CircledAmount label="Total" amount="${centsToDollars(sumInvoices($invoices))}" />
</main>
