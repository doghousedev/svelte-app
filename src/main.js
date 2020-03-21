import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ronaldo',
		weather: 'Sunny'
	}
});

export default app;