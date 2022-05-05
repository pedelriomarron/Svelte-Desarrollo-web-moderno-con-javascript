<script>
import { onMount } from "svelte";
export let params = {}
let id = params.id
const domain = "https://api.themoviedb.org/3/movie/"
const key = "?api_key=682a7e81df283928e59be663f6b484c7"
const url = domain + id+ key

let movie = {}
let genres= []

onMount(async ()=>{

    const res = await fetch(url)
    movie = await res.json()
    genres = await movie.genres
    console.log(genres)

})

</script>

<div class="row mt-5">
    <div class="col-lg-6">
        <img 
            src="https://image.tmdb.org/t/p/w500{movie.poster_path}"
            alt="{movie.title}" 
            width="100%" 
            height="700">
    </div>
    <div class="col-lg-6">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        {#each genres as item}
            <h4>{item.name}</h4>   
        {/each}
        <div class="rating" align="center">
            {movie.vote_average}
        </div>
    </div>
</div>

<style>
.rating{
    width: 300px;
    border: solid 4px black;
    font-size: 10rem;
    font-weight: bolder;
}

</style>