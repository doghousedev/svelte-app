<script>
	export let name,  weather
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>Todays weather{weather}</h2>
	<div>	This takes some time for this work flow.
	   <p> Is there an easy way to make it work?</p>
	   </div>
	<div> I think there is potentially a way to use this process.</div>
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
