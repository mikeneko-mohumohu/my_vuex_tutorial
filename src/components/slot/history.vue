<template>
    <ul>
        <li v-for="number in history">{{ number }}</li>
    </ul>
</template>

<script>
export default{
computed: {
            history(){
                return this.$store.state.history.concat().reverse();
            }
        }
    }
</script>