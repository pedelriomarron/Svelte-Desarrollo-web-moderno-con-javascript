<script>
	import Header from "./components/design/Header.svelte";
	import CardGrid from "./components/posts/CardGrid.svelte";
	import InputCustom from "./components/design/InputCustom.svelte";
	import Jumbotron from "./components/design/Jumbotron.svelte";

	const color = "warning"
	const title = "Mis Componentes"

	let postTitle ="";
	let postDescription ="";
	let postImg ="";
	let show =false

	let posts = [
		{
			id:"1",
			title:"Trabajando con ganas",
			description:"Trabajando desde las 7am con muchas ganas para que sea mejor",
			img:"https://cdn.pixabay.com/photo/2022/04/24/16/06/nature-7153955_960_720.jpg"
		},
		{
			id:"2",
			title:"Trabajando con java",
			description:"Trabajando desde las 7am con muchas ganas para que sea mejor",
			img:"https://cdn.pixabay.com/photo/2021/11/12/07/04/china-6788187_960_720.jpg"
		},
		{
			id:"1",
			title:"Trabajando con appian",
			description:"Trabajando desde las 7am con muchas ganas para que sea mejor",
			img:"https://cdn.pixabay.com/photo/2022/04/19/19/48/boy-7143682_960_720.jpg"
		}
	]

	function addPost(){
		const newPost = {
			id:Math.random().toString(),
			title:postTitle,
			img:postImg,
			description:postDescription
		}

		posts = [newPost, ...posts]
	}
</script>

<Header color={color} {title}/>

<div class="container">

	Mostrar Jumbo <input type="checkbox" bind:checked={show}/>
	{#if  show}
	<Jumbotron name="Mis compos" let:show={show}>
		<span slot="subtitle">Editado</span>
		<span slot="text">Editandfo el p</span>
		<div class:show>
			{#if  show}
			<button class="btn btn-danger">OK</button>
			{:else}
			<h2>Colocal el muse</h2>
			{/if}
		</div>

	</Jumbotron>
	{/if}

	<CardGrid {posts}/>

	<form on:submit|preventDefault={addPost}>
		
		<!-- Sin componentes 
		<input type="text" placeholder="Titulo" bind:value={postTitle}>
		<input type="text" placeholder="Descripcion" bind:value={postDescription}>
		<input type="text" placeholder="Imagen" bind:value={postImg}>
		-->

		<InputCustom type="text" placeholder="Titulo" name="Titulo" id="title" value={postTitle} on:input={event=> (postTitle = event.target.value)} />
		<InputCustom type="textarea" placeholder="Descripcion" name="Descripcion" id="description" value={postDescription} on:input={event=> (postDescription = event.target.value)} />
		<InputCustom type="text" placeholder="Imagen" name="Imagen" id="img" value={postImg} on:input={event=> (postImg = event.target.value)} />
		
		<button type="submit" class="btn btn-info">Guardar</button>

		</form>

</div>

