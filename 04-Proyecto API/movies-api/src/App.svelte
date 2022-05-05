<script>
	import Router from 'svelte-spa-router'
	import routes from './routes'
	import Menu from './components/Menu.svelte';
</script>

<Menu/>
<div class="container">
	<Router {routes}/>
</div>