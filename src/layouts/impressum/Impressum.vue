<template>
    <v-app> 
        <v-container class="fill-height">
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="2">
                    <default-view></default-view>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </v-app>
</template>

<script setup>
    import DefaultView from '../View.vue';
</script>
