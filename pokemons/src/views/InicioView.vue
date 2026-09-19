<script setup>
import imagemCapa from '../assets/images/capa-adocao.jpg'
</script>

<template>
  <main class="pagina">
    <section class="apresentacao">
      <div class="texto">
        <span class="etiqueta">Adoção Resnponsável</span>
        <h2>
          Encontre um novo amigo
        </h2>
        <p>
          O Patas de Kanto apresenta pokemons que procuram uma família. Nosso objetivo é incentivar a adoção responsável
          e oferecer informações básicas para futuros treinadores.
        </p>
        <p>
          Conheça os pokemons disponíveis e descubra como se preparar para receber umn novo companheiro.
        </p>

        <RouterLink class="botao" to="/pokemons">
          Conhecer os Pokemons
        </RouterLink>
      </div>
      <img :src="imagemCapa" alt="">
    </section>
    <section class="informacoes">
      <article>
        <h3>Adoção Consciente</h3>
        <p>Adotar exige responsabilidade, cuidado e planejamento.</p>
      </article>

      <article>
        <h3>Pokemons Acolhidos</h3>
        <p>Todos os pokemons recebem atenção enquanto aguardam uma família.</p>
      </article>

      <article>
        <h3>Nova Família</h3>
        <p>Uma adoção responsável pode transformar diferentes vidas.</p>
      </article>
    </section>
  </main>
</template>
<style scoped>
.pagina {
  width: min(1000px, 92%);
  margin: 40px auto;
}

.apresentacao {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  align-items: center;
}

.etiqueta {
  display: inline-block;
  padding: 7px 12px;
  color: #dc0a2d;
  font-size: 13px;
  font-weight: bold;
  background-color: #fde3e7;
  border-radius: 20px;
}

.texto h2 {
  margin: 12px 0;
  color: #dc0a2d;
  font-size: 36px;
}

.texto p {
  color: #5E5459;
  font-size: 18px;
  line-height: 1.6;
}

.botao {
  display: inline-block;
  margin-top: 10px;
  padding: 12px 20px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  background-color: #dc0a2d;
  border-radius: 8px;
}

.botao:hover {
  background-color: #a8081f;
}

.apresentacao img {
  width: 100%;
  max-width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.15);
}

.informacoes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.informacoes article {
  padding: 18px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.08);
  transition: 250ms ease-out
}

.informacoes article:hover{
  transform: translateY(-5px);
}

.informacoes h3 {
  margin: 0 0 8px;
  color: #dc0a2d;
}

.informacoes p {
  margin: 0;
  color: #5E5459;
  line-height: 1.5;
}

@media (max-width: 750px) {

  .apresentacao,
  .informacoes {
    grid-template-columns: 1fr;
  }
}
</style>