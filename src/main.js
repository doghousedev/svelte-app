import App from './App.svelte'

const app = new App({
	target: document.body,
	props: {
		name: "Ronaldo",
		weather: 'Sleet with a chance of rain.'
	}
});

export default app;