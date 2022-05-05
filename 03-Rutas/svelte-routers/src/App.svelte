<script>
	import Router from 'svelte-spa-router'
	import {link,push} from 'svelte-spa-router'
	import routes from './routes.js'

	let name="pedrito"
	function page(){
		push("/contact/12345")
	}

</script>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
	  <span class="navbar-brand" >Svelte Routers</span>
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
		  <li class="nav-item">
			<a class="nav-link active" href="/" use:link>Home</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="/about" use:link >About</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="/contact/123/{name}" use:link >Contact</a>
		  </li>
		</ul>
	  </div>
	</div>
  </nav>

  <Router {routes} />
  <button class="btn btn-warning" on:click={page}>Ir a </button>