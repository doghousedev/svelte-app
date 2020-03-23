<script>
	export let name,  weather
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>Todays weather - {weather}</h2>

	<div class = "c1"> Class test of CSS</div>
	<div class = "container"></div>
		<div id="my-grid" class="card"> This is where the grid goes</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #16ab16;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		color: darkolivegreen;
		font-size: 2em;
		font-weight: 100;
	}
	
	#my-grid{
			color: rgb(139, 61, 106);
			font-size: 4em;
	}

	 .c1{
			color: darkslateblue;
			font-size: 1.5em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
