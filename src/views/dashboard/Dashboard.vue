<template>
    <div class="q-pa-md">
        <div class="row q-gutter-md">
            <card-component class="col-3" :cardInfo="card" v-for="(card,index) in cardInfo" :key=index />
        </div>
    </div>
</template>

<style>
</style>

<script>
import CardComponent from '../../components/Card.vue'

export default {
  name: 'Dashboard',
  components: {
      CardComponent
  },
  data(){
      return{
          cardInfo:[
              {
                  title:'APL',
                  description:"Ceci est l'aide au logement",
                  steps:[
                      {
                          info:'déclaration'
                      },
                      {
                          info:'traitement'
                      },
                      {
                          info:'valider'
                      }
                  ]
              },
              {
                  title:'Inscription fac',
                  description:"Ceci est l'inscription à la fac",
                  steps:[
                      {
                          info:'déclaration'
                      },
                      {
                          info:'traitement'
                      },
                      {
                          info:'retour document'
                      },
                      {
                          info:'valider'
                      }
                  ]
              },
              {
                  title:'Demande de bourse',
                  description:"Ceci est la demande de bourse",
                  steps:[
                      {
                          info:'déclaration'
                      },
                      {
                          info:'traitement'
                      },
                      {
                          info:'valider'
                      }
                  ]
              }
          ]
      }
  }
}
</script>
