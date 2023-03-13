<script>
	export let type = "submit";
	export let classes = "";
</script>

<button
	type="{type}"
	class="{classes} bg-fem_green rounded shadow-md font-poppins text-white p-3 shadow-emerald-500 block"
>
	<slot>Claim Your free trial</slot>
</button>
