<script>
    import {createEventDispatcher} from 'svelte'
    export let title;
    export let img;
    const dispatch = createEventDispatcher()

    function viewMore(){
        dispatch("view-more")
    }
</script>

<div class="card mb-3" style="width: 18rem;">
    <img src="https://image.tmdb.org/t/p/w500{img}" alt="{title}" width="100%" height="500">
    <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <button class="btn btn-primary" on:click={viewMore}>Ver más...</button>
    </div>
</div>