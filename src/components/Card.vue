<template>
    <div>
        <!-- <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
  
        <q-separator ></q-separator>
  
        <q-card-actions align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card> -->
        <q-card class="bg-blue text-white">
                <div class="text-h6">{{cardInfo.title}}</div>
                <div class="column">
                    <div class="row">
                        {{cardInfo.description}}
                    </div>
                    <div class="row q-pa-sm" v-for="(step,index) in cardInfo.steps" :key=index style="background-color: #FFFFFF; color: #2196f3">
                        <q-separator dark />
                        <div class="col">
                            {{step.info}}
                        </div>
                        <div class="row justify-end">
                            <q-btn color="white" text-color="blue" label="voir" />
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
