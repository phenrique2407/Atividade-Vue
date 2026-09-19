<template>
  <div class="aplicacao">
    <header class="cabecalho">
      <div>
        <h1>Patas de Kanto</h1>
        <p>Portal de adoção de Pokemons</p>
      </div>

      <nav class="menu">
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/pokemons">Pokemons</RouterLink>
        <RouterLink to="/cuidados">Cuidados</RouterLink>
      </nav>
    </header>

    <RouterView />
    
    <footer class="rodape">
      <p>Projeto desenvolvido por <strong>Pedro Henrique Dias Brito, Vinícius Rodrigues Vilaça e Vitório Fraga Motta</strong></p>
    </footer>
  </div>
</template>

<style>
/* Estilos globais (sem "scoped"), pois o main.css não é mais importado */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fbf3f3;
  color: #24322c;
}
</style>

<style scoped>
.aplicacao {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 14px 6%;
  background-color: #dc0a2d;
  color: white;
}

.cabecalho h1 {
  margin: 0;
  font-size: 24px;
}

.cabecalho p {
  margin: 2px 0 0;
  font-size: 12px;
}

.menu {
  display: flex;
  gap: 10px;
}

.menu a {
  padding: 6px 12px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
  transition: 250ms ease-out;
}

.menu a:hover {
  background-color: rgba(255, 255, 255, 0.18);
  transform: translateY(-5px);
}

.rodape {
  margin-top: auto;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  color: #5e5459;
}
.menu a.router-link-active,
.menu a.router-link-exact-active {
  color: #dc0a2d;
  background-color: white;
}
</style>