<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    export let title
    export let description
    export let img

    function viewMore(){
        dispatch("viewMore",{id:222})
    }
    function favorite(){
        dispatch("favorite","hola")

    }
</script>


<div class="card" style="width: 18:rem;">
    <img src={img} alt={title} width="100%" height="200" />
    <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <button class="btn btn-info" on:click={viewMore}>Ver más</button>
        <button class="btn btn-primary" on:click={favorite}>Favorito</button>
    </div>
</div>