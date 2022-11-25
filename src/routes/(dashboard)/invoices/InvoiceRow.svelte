<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import More from '$lib/images/ThreeDots.svelte';
	import View from '$lib/images/View.svelte';
	import { convertDate, isLate } from '$lib/utils/dateHelpers';
	import { sumLineItems, centsToDollars } from '$lib/utils/moneyHelpers';

	export let invoice: Invoice;
	const { invoiceStatus, dueDate, invoiceNumber, client, lineItems } = invoice;

	const getInvoiceLabel = (): InvoiceLabel => {
		if (invoiceStatus === 'draft') return 'draft';
		else if (invoiceStatus === 'sent' && !isLate(dueDate)) return 'sent';
		else if (invoiceStatus === 'sent' && isLate(dueDate)) return 'late';
		else if (invoiceStatus === 'paid') return 'paid';
		return 'draft';
	};
</script>

<!-- invoices -->
<ul class="invoice-row invoice-table items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6">
	<li class="status">
		<Tag label="{getInvoiceLabel()}" className="ml-auto lg:ml-0" />
	</li>
	<li class="dueDate">{convertDate(dueDate)}</li>
	<li class="invoiceNumber">{invoiceNumber}</li>
	<li class="clientName truncate whitespace-nowrap text-base font-bold lg:text-xl">
		{client.name}
	</li>
	<li class="amount text-right font-mono font-bold">${centsToDollars(sumLineItems(lineItems))}</li>
	<li class="view lg:center hidden">
		<a href="#" class="text-pastelPurple hover:text-daisyBush">
			<View />
		</a>
	</li>
	<li class="more lg:center hidden">
		<button class="text-pastelPurple hover:text-daisyBush">
			<More />
		</button>
	</li>
</ul>

<style lang="postcss">
	.invoice-table li:not(:nth-child(4)) {
		@apply text-sm lg:text-lg;
	}

	.invoice-row {
		grid-template-areas:
			'invoiceNumber invoiceNumber'
			'clientName amount'
			'dueDate status';
	}
	@media (min-width: 1024px) {
		.invoice-row {
			grid-template-areas: 'status dueDate invoiceNumber clientName amount view more';
		}
	}
	.invoice-row .status {
		grid-area: status;
	}

	.invoice-row .dueDate {
		grid-area: dueDate;
	}
	.invoice-row .invoiceNumber {
		grid-area: invoiceNumber;
	}
	.invoice-row .clientName {
		grid-area: clientName;
	}
	.invoice-row .amount {
		grid-area: amount;
	}
	.invoice-row .view {
		grid-area: view;
	}
	.invoice-row .more {
		grid-area: more;
	}
</style>
