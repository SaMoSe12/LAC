<script setup lang="ts">
    defineProps<{
        title: string,
        imgUrl: string,
        publishedDate: string,
        description?: string,
        authorName?: string,
    }>()
</script>
<template>
    <div class="bg-neutral-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:shadow-slate-900/45 sm:w-75 h-full w-full  transition-shadow duration-100 ease-in-out flex flex-col justify-between items-center">
        <img :src="imgUrl" alt="Blog Image" class="w-full h-48 object-cover">
        <div class="p-6 h-full grid justify-center items-stretch">
            <h2 class="text-2xl font-semibold text-slate-800 mb-2">{{ title }}</h2>
            <p class="text-slate-600 mb-4" v-if="description">{{ description }}</p>
            <div class="flex items-center">
                <img src="/img/lulu-blog_Mobile.jpg" alt="" class="w-8 h-8 rounded-full mr-2">
                <div class="align-self-end justify-self-end">
                    <p class="text-slate-800 font-semibold">{{ authorName }}</p>
                    <p class="text-slate-500">{{ publishedDate }}</p>

                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>