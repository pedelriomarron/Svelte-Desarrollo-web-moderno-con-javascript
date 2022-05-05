<script>
    import Card from "./Card.svelte"
    export let posts
    let event= "Sin determinar"

    function viewMore(e){
        alert("Ver mas info")
        event=e.detail.id
    }

    function favorite(e){
        alert("el favorito")
        event =e.detail
    }
</script>


<div class="row mt-3">
        {#each posts as item }
        <div class="col sm">
		    <Card title={item.title} description={item.description} img={item.img} on:viewMore={viewMore} on:favorite={favorite}/>
        </div>
	    {/each}
</div>
<h1>{event}</h1>