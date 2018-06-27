<template>
     <div v-if="isOver" class="controller">
        <button v-if="nowShuffle" @click="STOP" type="button">STOP</button>
        <button v-else @click="START" type="button">START</button>
    </div>
    <div v-else>
        <p>終了</p>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { START, STOP } from '../../vuex/mutation-types'
    export default{
        methods: {
            ...mapActions([
            START,STOP
          ])
        },
        computed: {
            nowShuffle(){
                return this.$store.state.nowShuffle;
            },
            isOver(){
                return this.$store.state.remainingNumber.length > 0;
            }
        }
    }

</script>