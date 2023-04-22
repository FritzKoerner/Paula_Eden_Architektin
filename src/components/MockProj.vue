<template>
    <v-img 
        :src="`@/assets/${number}.jpg`"
        aspect-ratio="16/9"
        cover
        max-height="250"
    >
    </v-img> 
    <h1>{{ number }}</h1>
</template>

<script>
    export default {
        props: {
            number: Number,
        }
    }

</script>