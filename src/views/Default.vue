<template>
    <v-container>
        <v-row>
            <v-col 
                md="3"
                v-for="i in 12"    
            >   
                <mock-proj />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import MockProj from '@/components/MockProj.vue';
</script>

<style>
    * {
        border-color: red;
        border: 2px;
    }
</style>