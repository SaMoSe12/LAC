<script setup lang="ts">
    import {ref, onMounted} from 'vue'
    const readTime = ref(0)

    const props = defineProps<{
        title?: string
        body: string
        author?: number
        imgUrl?: string
        publishedDate?: string
    }>()

    onMounted(() => {
        readTime.value = estimateReadingTime(props.body);
    })
    const estimateReadingTime = (text:string):number => {
        const wpm = 180; // Words per minute
        const wc = text.split(/\s+/).length; // Word Count
        return Math.ceil(wc / wpm); // read Time in minutes
    }
</script>
<template>
    <div class="contain-none bg-neutral-200 dark:bg-neutral-900 text-gray-950 dark:text-neutral-100">
        <h1 class="text-3xl " :v-text="(author) ? `${title} by ${author}` : `${title}` " />
        <p class="text-base font-thin text-neutral-300 dark:text-neutral-100">
            <span class="px-2"><v-icon name="bi-calendar2"/>{{publishedDate}}</span> | <v-icon name="hi-clock"/>{{readTime}} minutos
        </p>
    </div>

</template>
<style scoped></style>