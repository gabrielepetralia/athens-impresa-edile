<script>
export default {
  name: "About"
}
</script>

<template>
  <section id="about">
    <div class="background-image">
      <div class="gp-overlay"></div>

      <h2 class="text-center mb-5">Chi Siamo</h2>
      
      <div class="d-flex flex-column align-items-center w-100">

        <div class="paragraphs d-flex flex-column align-items-center w-100">
          <p>
            Athens Cooperativa Currenti è una giovane e dinamica impresa edile con sede a Giardini Naxos (ME), la
            quale si occupa di ideare, sviluppare e realizzare progetti di edilizia, impiegando le più moderne tecnologie
            disponibili.
          </p>
          <p>
            La nostra attività principale riguarda la costruzione di infrastrutture e edifici privati, grazie all'impiego di
            manodopera qualificata e specializzata direttamente sotto la nostra gestione, supportata dal nostro ufficio tecnico.
          </p>
          <p>
            Al momento, il nostro team è composto da circa 10 professionisti tra carpentieri, muratori, manovali,
            ponteggisti e personale tecnico e direttivo. A seconda delle esigenze dei committenti e del volume di lavoro
            acquisito, possiamo espandere il nostro organico per gestire cantieri di grandi dimensioni.
          </p>
          <p>
            Inoltre, ci avvaliamo di studi professionali esterni per la gestione della sicurezza e della medicina del lavoro
            nei cantieri. Questi professionisti redigono tutta la documentazione tecnico-amministrativa conforme alle
            normative vigenti nel settore edile, come richiesto dai nostri clienti prima dell'inizio dei lavori. Si occupano
            anche di monitorare costantemente la salute dei dipendenti attraverso visite mediche e controlli sanitari, oltre
            a garantire l'aggiornamento degli attestati professionali di formazione dei singoli addetti. Queste pratiche ci
            consentono di operare nel rispetto della legge in materia di sicurezza e formazione professionale.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

section {
  padding: 0;
  background-color: $gp-gray;

  .background-image {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("/img/about-bg.jpeg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  h2 {
    padding-top: 50px;
    position: relative;
    color: $gp-white;
    text-align: center;
  }

  .paragraphs {
    padding-bottom: 50px;

    p {
        position: relative;
        margin-bottom: 25px;
        max-width: 80%;
        text-align: center;
        color: $gp-white;
      }
  }
}

@media screen and (min-width: 992px) {
  .paragraphs {
  
      p {
        max-width: 50% !important;
      }
    }
}
</style>