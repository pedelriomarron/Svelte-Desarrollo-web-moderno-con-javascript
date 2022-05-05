import Home from './pages/Home.svelte'
import Movie from './pages/Movie.svelte'
import Error404 from './pages/Error404.svelte'

const routes = {
    "/":Home,
    "/movie/:id":Movie,
    "*":Error404
}

export default routes