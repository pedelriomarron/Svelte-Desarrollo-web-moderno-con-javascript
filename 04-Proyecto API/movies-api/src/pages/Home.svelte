<script>
import Loading from "../components/Loading.svelte";
import Grid from "../components/Grid.svelte";

const url = "https://api.themoviedb.org/3/movie/popular?api_key=682a7e81df283928e59be663f6b484c7"

let promise = ajax()
let movies = []

async function ajax(){
    const res = await fetch(url)
    movies = await res.json()

    await new Promise(res=>setTimeout(res,3000))
    if(!res.ok){
        throw new Error("No hay conexion con la API")
    }
    console.log(movies)
    return movies.results
}
</script>

<h1>Peliculas más populares:</h1>

{#await promise}
<div aling="center"><Loading/></div>
{:then movies} 
    <Grid {movies} />
{:catch error}
    <p style="color:red">{error}</p>
{/await}

