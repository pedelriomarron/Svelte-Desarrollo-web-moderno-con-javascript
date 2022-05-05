<script>
	export let name;
	const lastName = "del Río";
	let html = "<b>Negrita<b>"
	let v1 = 0;
	let v2 = 0;
	let check = false;
	let counter = 0;
	let text = ''
	let login = true
	const loginButton = ()=> login = !login
	let names=["Pedro","Andres","Clauido"]
	let persons = [{"id":1,"nombre":"Devan","apellido":"Mordey","email":"dmordey0@google.com.br"},
{"id":2,"nombre":"Tobi","apellido":"Knudsen","email":"tknudsen1@cbc.ca"},
{"id":3,"nombre":"Thia","apellido":"Rosengarten","email":"trosengarten2@posterous.com"},
{"id":4,"nombre":"Willy","apellido":"Sterling","email":"wsterling3@blogspot.com"},
{"id":5,"nombre":"Wes","apellido":"Chaffin","email":"wchaffin4@myspace.com"},
{"id":6,"nombre":"Martyn","apellido":"Nicholson","email":"mnicholson5@dmoz.org"},
{"id":7,"nombre":"Lannie","apellido":"Gallatly","email":"lgallatly6@senate.gov"},
{"id":8,"nombre":"Mirella","apellido":"De Ruel","email":"mderuel7@facebook.com"},
{"id":9,"nombre":"Sunny","apellido":"Stening","email":"sstening8@odnoklassniki.ru"},
{"id":10,"nombre":"Newton","apellido":"Hatchman","email":"nhatchman9@ebay.co.uk"},
{"id":11,"nombre":"Karalee","apellido":"Ogle","email":"koglea@ted.com"},
{"id":12,"nombre":"Tobye","apellido":"Hefner","email":"thefnerb@goo.ne.jp"},
{"id":13,"nombre":"Krissie","apellido":"Pimm","email":"kpimmc@jugem.jp"},
{"id":14,"nombre":"Hadley","apellido":"Bouller","email":"hboullerd@elpais.com"},
{"id":15,"nombre":"Elizabet","apellido":"Shevlan","email":"eshevlane@wufoo.com"},
{"id":16,"nombre":"Gris","apellido":"Karpenko","email":"gkarpenkof@buzzfeed.com"},
{"id":17,"nombre":"Ermina","apellido":"Morecombe","email":"emorecombeg@dagondesign.com"},
{"id":18,"nombre":"Florrie","apellido":"Roylance","email":"froylanceh@yahoo.co.jp"},
{"id":19,"nombre":"Jessi","apellido":"Scarrisbrick","email":"jscarrisbricki@rambler.ru"},
{"id":20,"nombre":"Lura","apellido":"Questier","email":"lquestierj@howstuffworks.com"}]
	let url = "https://jsonplaceholder.typicode.com/users"
	let users=[]
	let promise = ajax()
	
	$: result = counter *10
	$: if ( result === 30){
		text = "OK"
	}else{
		text= "Oouchhh"
	}
	name = "Pedro";

	function alert1(){
		alert('Alerta 1')
	}

	const alert2 = ()=>{
		alert("Alerta 2")
	}

	async function ajax(){
		const res = await fetch(url)
		users = await res.json()
		await sleep(3000)
		if(res.ok)
			return users
		else
			throw new Error("Error al conectar con la api")
	}

	function sleep(s){
		return new Promise(res=>setTimeout(res,s))
	}
</script>

<main>
	<div>
		<h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps. {@html html}</p>
		<h2>{name} {lastName} </h2>
	</div>
	<div>
		<!-- Input -->
		<div>
			<h1>Input</h1>
			<input type="text" bind:value={name} />
			<input type="range" bind:value={v1} />
			<input type="range" bind:value={v2} />
			<p>{v1}+{v2} = {v1+v2}</p>
			<p>Habilitar botón</p>
			<input type="checkbox" bind:checked={check} />
			<button disabled={!check}>Guardar</button>
		</div>
		<hr/>
		<!-- OnClick -->
		<div>
			<h1>OnClick</h1>
			<button on:click={alert1}>Alertar</button>
			<button on:click={alert2}>Alertar 2</button>
			<button on:click={()=>{ alert("Alerta 3")}}>Alertar 3</button>
		</div>
		<hr/>
		<!-- Variables reactivas -->
		<div>
			<h1>Variables Reactivas</h1>
			<button on:click={()=>counter+=1}>Contador</button>
			<p>Contador: {counter}</p>
			<p>Resultado x10: {result}</p>
			<p>{text}</p>
		</div>
		<hr/>
				<!-- Bloque IF -->
		<div>
			<h1>Bloque IF</h1>
			{#if login }
			<h2>Estas Logueado</h2>
			{:else}
			<h2>Iniciar sesión</h2>
			{/if}
			<button on:click={loginButton}>Login</button>
		</div>
			<!-- Bloque Each -->
		<div>
			<h1>Bloque Each</h1>
				<ul>
					{#each names as name,i}
						<li>{i}{name}</li>
					{/each}
				</ul>
				<table>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>Email</th>
					{#each persons as person,i}
					<tr>
						<td>{person.nombre}</td>
						<td>{person.apellido}</td>
						<td>{person.email}</td>
					</tr>
					{:else}
					<tr>
						<td colspan="3">No hay Datos</td>
					</tr>
					{/each}
				</table>

			</div>


		</div>
		<hr/>
		<!-- Bloque Await -->
		<div>
			<h1>Bloque Await</h1>
			{#await promise}
				<p>Cargando API</p>
			{:then users}
				{#each users as item,i}
				<p>{item.name}</p>
				{/each}
			{:catch error}
				<p style="color:red">{error}</p>
			{/await}
		</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
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