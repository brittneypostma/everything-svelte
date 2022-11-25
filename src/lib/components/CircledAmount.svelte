<script lang="ts">
	import circle from '../images/circle.svg';
	export let label: string, amount: string;
</script>

<div class="center float-right mt-8 mr-16 gap-x-4">
	<img src="{circle}" alt="circled total amount" class="absolute min-h-[6rem] min-w-[16rem]" />
	<div class="font-bold">{label}</div>
	<div class="font-mono text-xl font-bold">{amount}</div>
</div>
