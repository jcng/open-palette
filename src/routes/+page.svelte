<script>
    export let form;
</script>

<form method="POST">
	<label>
		Input
		<input name="input" type="text" />
	</label>
	<button>Generate</button>
    <p>{ form?.result}</p>
</form>
