<script setup>
import imagemEevee from '../assets/images/eevee.png'
import imagemPikachu from '../assets/images/pikachu.png'
import imagemArceus from '../assets/images/arceus.png'
</script>

<template>
    <main class="pagina">
        <section class="titulo">
            <span class="etiqueta">Esperando uma família</span>
            <h2>Pokemons Disponíveis</h2>
            <p>Conheça alguns dos pokemons fictícios disponíveis para adoção.</p>
        </section>

        <section class="cards">
            <article class="card">
                <img :src="imagemEevee" alt="Eevee">
                <div class="conteudo">
                    <h3>Eevee</h3>
                    <div class="destaques">
                        <span class="etiqueta">2 anos</span>
                        <span class="etiqueta">Porte Pequeno</span>
                    </div>
                     <p>
                        Graças à sua composição genética instável, este Pokémon especial esconde muitas evoluções possíveis diferentes.
                    </p>

                    <p class="comportamento">Comportamento: ativo e amigável</p>
                </div>
            </article>
            
            <article class="card">
              <img :src="imagemPikachu" alt="Pikachu" />
              
              <div class="conteudo">
                <h3>Pikachu</h3>
                
                <div class="destaques">
                  <span class="etiqueta">2 anos</span>
                  <span class="etiqueta">Porte pequeno</span>
                </div>
                
                <p>
                  Possui pequenas bolsas elétricas em ambas as bochechas. Quando em apuros, este Pokémon descarrega eletricidade.
                </p>
                
                <p class="comportamento">Comportamento: Energético e carinhoso</p>
              </div>
            </article>
            
            <article class="card">
                <img :src="imagemArceus" alt="Arceus">
                <div class="conteudo">
                    <h3>Arceus</h3>
                    <div class="destaques">
                        <span class="etiqueta">??? anos</span>
                        <span class="etiqueta">Porte multiversal</span>
                    </div>
                     <p>
                        Segundo as lendas de Sinnoh, este Pokémon emergiu de um ovo e moldou tudo o que existe neste mundo.
                    </p>

                    <p class="comportamento">Comportamento: ???</p>
                </div>
            </article>
        </section>

        <section class="chamada">
            <p>Gostou de algum pokemon? Consulte os cuidados necessários antes de tomar sua decisão</p>
        </section>
        <RouterLink class="botao" to="/cuidados">Ver Cuidados</RouterLink> 
    </main>
</template>

<style scoped>
.pagina {
  width: min(1050px, 92%);
  margin: 40px auto;
}

.titulo {
  margin-bottom: 30px;
  text-align: center;
}

.titulo h2 {
  margin: 12px 0;
  color: #dc0a2d;
  font-size: 36px;
}

.titulo p {
  color: #5e5459;
}

.etiqueta {
  display: inline-block;
  padding: 7px 12px;
  color: #dc0a2d;
  font-weight: bold;
  background-color: #fde3e7;
  border-radius: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

.card {
  overflow: hidden;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
  transition: 250ms ease-out;
}
.card:hover{
  cursor: pointer;
  transform: translateY(-10px);
}
.card img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: 240px;
  object-fit: cover;
}

.conteudo {
  padding: 22px;
}

.conteudo h3 {
  margin: 0 0 10px;
  color: #dc0a2d;
  font-size: 22px;
}

.destaques {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.conteudo .etiqueta {
  padding: 4px 10px;
  font-size: 12px;
}

.conteudo p {
  margin: 0 0 10px;
  color: #5E5459;
  line-height: 1.5;
}

.conteudo .comportamento {
  color: #24322c;
  font-weight: bold;
}

.chamada {
  margin-top: 30px;
  padding: 24px;
  text-align: center;
  background-color: #fdecee;
  border-radius: 14px;
}

.chamada p {
  margin: 0 0 14px;
  color: #5E5459;
}

.botao {
  display: inline-block;
  padding: 10px 18px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  background-color: #dc0a2d;
  border-radius: 8px;
}

.botao:hover {
  background-color: #a8081f;
}

@media (max-width: 750px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>