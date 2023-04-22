<template>
    <v-container>
        <v-row>
            <v-col 
                md="3"
                v-for="i in 12"    
            >  
                <mock-proj :number="i"/>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import MockProj from '@/components/MockProj.vue';
</script>

<style scoped>
  
</style>