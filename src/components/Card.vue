<template>
    <div>
        <q-card class="bg-blue text-white">
            <q-card-section>
                <div class="text-h6">{{cardInfo.title}}</div>
                <div class="column">
                    <div class="row">
                        {{cardInfo.description}}
                    </div>
                    <div class="row q-mt-md" v-for="(step,index) in cardInfo.steps" :key=index>
                        <q-separator dark />
                        <div class="col">
                            {{step.info}}
                        </div>
                        <div class="row justify-end">
                            <q-btn color="white" text-color="black" label="Standard" />
                        </div>
                    </div>
                </div>
            </q-card-section>
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
