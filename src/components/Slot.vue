<template>
    <div>
        <result></result>
        <controller></controller>
        <history></history>
    </div>
</template>
<script>
    import Result from './slot/result';
    import Controller from './slot/controller';
    import History from './slot/history';

    export default{
        components: {
            Result,
            Controller,
            History
        }
    }
</script>