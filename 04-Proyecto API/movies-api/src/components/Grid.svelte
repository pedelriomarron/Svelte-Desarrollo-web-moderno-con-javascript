<script>
    import Card from './Card.svelte'
    import {push} from 'svelte-spa-router'
    export let movies;
    
</script>

<div class="row mt-3">
    {#each movies as item}
        <div class="col-sm-4">
            <Card title={item.title} img={item.poster_path}
            on:view-more={()=>push("/movie/"+item.id)} 
            />
        </div>
    {/each}
</div>