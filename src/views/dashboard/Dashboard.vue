<template>
    <div class="q-pa-md">
        <div class="row q-gutter-md">
            <card-component 
            class="col-3" 
            :cardInfo="card" 
            @makeStep=makeStep
            v-for="(card,index) in cardInfo" 
            :key=index 

            />
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
                  id:'1',
                  title:'APL',
                  description:"Ceci est l'aide au logement",
                  currentStep: 1,
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
                  id:'2',
                  title:'Inscription fac',
                  description:"Ceci est l'inscription à la fac",
                  currentStep: 2,
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
                  id:'3',
                  title:'Demande de bourse',
                  description:"Ceci est la demande de bourse",
                  currentStep: 1,
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
                  id:'4',
                  title:'Logement',
                  description:"Les infos a propos du logement",
                  currentStep: 0,
                  steps:[
                      {
                          info:'dossier location'
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
  },
  methods:{
      makeStep(cardId, stepIndex){
          this.cardInfo.map((card) =>{
              if(card.id === cardId){
                  if(stepIndex === card.currentStep + 1){
                      card.currentStep += 1;
                  }else{
                      this.$q.notify({
                        color    : 'negative',
                        textColor: 'white',
                        icon     : 'warning',
                        message  : "Cette étape ne peut être validée"
                        })
                  }
              }
          })
      }
  }
}
</script>
