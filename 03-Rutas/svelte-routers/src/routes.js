import Home from './pages/Home.svelte'
import Error404 from './pages/Error404.svelte'
import Contact from './pages/Contact.svelte'
import About from './pages/About.svelte'

const routes = {
    '/':Home,
    '/about':About,
    '/contact/:id/:name?':Contact,
    '*':Error404
}

export default routes