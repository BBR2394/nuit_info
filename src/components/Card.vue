<template>
    <div>
        <q-card class="bg-blue text-white">
                <div class="text-h6 q-pa-md">{{cardInfo.title}}</div>
                <div class="column">
                    <div class="row q-pa-md">
                        {{cardInfo.description}}
                    </div>
                    <div 
                    class="row q-pa-sm" 
                    v-for="(step,index) in cardInfo.steps" 
                    :key=index 
                    :style=" cardInfo.currentStep < index ?'background-color: #FFFFFF; color: #2196f3' : 'background-color: #2196F3; color: #FFFFFF'"
                    >
                        <q-separator dark />
                        <div class="col">
                            {{step.info}}
                        </div>
                        <div class="row justify-end">
                            <q-btn color="white" text-color="blue" label="voir" @click="$emit('makeStep',cardInfo.id, index)"/>
                        </div>
                    </div>
                </div>
        </q-card>
    </div>
</template>

<style>
</style>

<script>
export default {
  name: 'Card',
  props:['cardInfo']
}
</script>
