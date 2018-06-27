<template>
    <div class="result">
         <div v-if="nowShuffle" class="now-shuffle">
            シャッフル中
        </div>
        <div v-else class="result-number">
             {{ resultNumber }}
        </div>
    </div>
</template>
<script>
export default {
        computed: {
            nowShuffle(){
                return this.$store.state.nowShuffle;
            },
            resultNumber() {
                return this.$store.state.resultNumber;
            }
        }
    }
</script>