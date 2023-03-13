<script>
	export let type = "text";
	export let classes = "";
	export let placeholder = "";
	export let value = "";
	export let name;
	export let required = false;
	export let hasError = false;
</script>

<input
	type="{type}"
	on:input="{(e) => (value = e.target.value)}"
	value="{value}"
	name="{name}"
	required="{required}"
	class="{classes} {hasError
		? 'border-fem_red text-fem_red outline-none'
		: 'border-fem_grayish_blue'} border rounded w-full p-2 text-sm"
	placeholder="{placeholder}"
/>
