<script setup>
    import imagemCuidados from '../assets/images/cuidados.png'
</script>

<template>
    <main class="pagina">
        <section class="cabecalho-pagina">
            <div>
                <span class="etiqueta">Adoção Responsável</span>
                <h2>Cuidados antes da adoção</h2>
                <p>Antes de adotar, é importante avaliar se a família possui tempo, espaço e condições para cuidar do pokemon</p>
            </div>

            <img :src="imagemCuidados" alt="Enfermeira Joy">
        </section>
        <section class="lista-cuidados">
            <h3>Principais Cuidados</h3>
            <ul>
                <li>
                    <strong>Alimentação:</strong> Oferecer alimentos adequados para a idade, porte e dieta do pokemon
                </li>
                <li>
                    <strong>Hidratação:</strong> manter água limpa e disponível durante todo o dia.
                </li>
                <li>
                    <strong>Higiene:</strong> manter limpos o animal e o espaço em que ele vive.
                </li>
                <li>
                    <strong>Tempo e atenção:</strong> reservar momentos para brincadeiras, passeios e convivência.
                </li>
                <li>
                    <strong>Saúde:</strong> levar o pokemon ao Centro Pokémon para check-ups regulares.
                </li>
            </ul>
        </section>

        <section class="aviso">
            <h3>Pense antes de adotar</h3>
            <p>Um pokemon pode permanecer muitos anos com a família. A decisão deve ser consciente e compartilhada por todos</p>
        </section>
        <RouterLink class="botao-voltar" to="/pokemons">
            Voltar para os Pokemons
        </RouterLink>
    </main>
</template>

<style scoped>
.pagina {
  width: min(1000px, 92%);
  margin: 40px auto;
}

.cabecalho-pagina {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 35px;
  align-items: center;
}

.cabecalho-pagina h2 {
  margin: 12px 0;
  color: #dc0a2d;
  font-size: 36px;
}

.cabecalho-pagina p {
  color: #5E5459;
  font-size: 18px;
  line-height: 1.6;
}

.cabecalho-pagina img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center top;
  border-radius: 10px;
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

.lista-cuidados {
  margin-top: 30px;
  padding: 22px;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.08);
}

.lista-cuidados h3 {
  margin: 0 0 12px;
  color: #dc0a2d;
}

.lista-cuidados ul {
  margin: 0;
  padding-left: 20px;
}

.lista-cuidados li {
  margin-bottom: 10px;
  color: #5E5459;
  line-height: 1.5;
}

.aviso {
  margin-top: 24px;
  padding: 18px 22px;
  background-color: #fff4d6;
  border: 1px solid #f0dc9a;
  border-radius: 10px;
}

.aviso h3 {
  margin: 0 0 8px;
  color: #3b3216;
}

.aviso p {
  margin: 0;
  color: #5c5127;
}

.botao-voltar {
  display: inline-block;
  margin-top: 24px;
  padding: 10px 18px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  background-color: #dc0a2d;
  border-radius: 8px;
}

.botao-voltar:hover {
  background-color: #a8081f;
}

@media (max-width: 750px) {
  .cabecalho-pagina {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>