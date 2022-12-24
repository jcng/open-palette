<script>
	export let form;

	let colors = form?.result.trim().replaceAll(' ', '').split(',');
	console.log(colors);
</script>

<div class="navbar bg-base-100">
	<div class="btn btn-ghost normal-case text-xl">Open Palette</div>
</div>
<div class="container w6 ml-14 mr-14 mt-10">
	<form method="POST">
		<label class="input-group justify-center">
			<span>Input</span>
			<input class="input input-bordered" name="input" type="text" placeholder={form?.input} />
		</label>
		<div style="text-align: center"><button class="btn rounded-full m-3">Generate</button></div>
		{#if form}
			<div class="color-cards grid grid-cols-5">
				{#each colors as color}
					<div class="card w6" style="color: {color}">
						<div class="card-body">
							<div class="w-full h-5" style="background-color: {color}" />
							<h2 class="card-title">{color}</h2>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</form>
</div>
