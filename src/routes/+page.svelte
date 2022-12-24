<script>
    export let form;

	let colors = form?.result.trim().replaceAll(" ", "").split(",");
	console.log(colors);
</script>

<form method="POST">
	<label>
		Input
		<input name="input" type="text" placeholder={form?.input}/>
	</label>
	<button>Generate</button>
	{#if form}
		<div style="color: {colors[0]}" >{ colors[0] }</div>
		<div style="color: {colors[1]}">{ colors[1] }</div>
		<div style="color: {colors[2]}">{ colors[2] }</div>
	{/if}
</form>
