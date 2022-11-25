<script lang="ts">
	export let label: InvoiceLabel,
		className = '';
</script>

<div
	class="{`text-md w-20 rounded-full border-1 border-pastelPurple text-center font-bold capitalize text-pastelPurple ${className}`}"
	class:inverted="{label === 'draft'}"
	class:success="{label === 'sent' || label === 'current'}"
	class:late="{label === 'late'}"
	class:archive="{label === 'paid' || label === 'archive'}">
	{label}
</div>

<style lang="postcss">
	.inverted {
		@apply border-pastelPurple text-pastelPurple;
	}
	.success {
		@apply border-robinEggBlue bg-robinEggBlue text-blueGem;
	}

	.late {
		@apply border-scarlet bg-scarlet text-goldenFizz;
	}

	.archive {
		@apply border-pastelPurple bg-pastelPurple text-white;
	}
</style>
