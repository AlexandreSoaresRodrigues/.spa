import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/Universe", "/pages/Universe.html",)
router.add("/Explore", "/pages/Explore.html",)
router.add(404, "/page/404.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()