import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '@/views/InicioView.vue'
import PokemonsView from '@/views/PokemonsView.vue'
import CuidadosView from '@/views/CuidadosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: InicioView,
    },
    {
      path: '/pokemons',
      component: PokemonsView,
    },
    {
      path: '/cuidados',
      component: CuidadosView,
    },

  ],
})

export default router
