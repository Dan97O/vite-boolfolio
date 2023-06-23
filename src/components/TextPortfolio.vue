<script>

import SocialCard from './SocialCard.vue';
export default {
  name: "TextPortfolio",
  components: { SocialCard },
  data() {
    return {

    }
  },
  methods: {

  }

}
</script>
<template>
  <div class="card-body text-white">
    <h3 class="card-title">Benvenuto nel mio portfolio!</h3>
    <p class="card-text">
      Sono Daniel Oddo, e sono entusiasta di presentarti il mio primo progetto full-stack, realizzato
      interamente da me.
      Nel mondo del back-end, ho scelto di utilizzare la potenza di PHP in combinazione con il framework
      Laravel.
      Grazie a questa combinazione, sono in grado di gestire tutte le operazioni CRUD (Create, Read, Update,
      Delete) sul
      database e di creare API avanzate per garantire una comunicazione efficiente e sicura con il front-end.
    </p>
    <p class="card-text d-none d-md-block">
      Per creare un'esperienza utente coinvolgente, ho abbracciato VueJs, posso creare interfacce interattive
      e reattive
      utilizzando il potere dei componenti. Questo mi permette di creare un'architettura modulare e
      flessibile, garantendo una
      manutenzione agevole e uno sviluppo rapido delle funzionalità.
    </p>
    <p class="card-text d-none d-md-block">
      Sono estremamente orgoglioso di presentare questo progetto, che riflette la mia passione per lo
      sviluppo.
      Esplora il mio portfolio per scoprire i progetti che ho realizzato e le competenze che ho acquisito nel
      corso del mio
      percorso. Spero che il mio lavoro ti ispiri e dimostri la mia dedizione e impegno nel creare soluzioni
      sofisticate e di
      alta qualità.
    </p>
    <p class="card-text d-none d-lg-block">
      Grazie per aver visitato il mio portfolio e per l'opportunità di condividere la mia passione con te.
      Sono entusiasta di
      intraprendere nuove sfide e di contribuire a progetti emozionanti nel futuro!
    </p>
  </div>
</template>


<style lang="scss" scoped></style>