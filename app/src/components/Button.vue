<script setup lang="ts">
defineProps<{
    innerButton:string
    hasIcon: boolean
    icon?: string
    rounded?: boolean
    transparent?: boolean
    innerClass?: string
}>()
</script>
<template>
    <button class="
    font-bold 
    py-2 
    px-4 
    " 
    :class="[
        (rounded) ? 'rounded-full' : 'rounded',
        (transparent) ? 'bg-transparent text-babyBlue-500 hover:bg-babyBlue-500 hover:text-neutral-100 border-2 border-babyBlue-500 hover:border-transparent' : 'bg-babyBlue-500 hover:bg-babyBlue-700 text-neutral-100',
        (innerClass) ? innerClass : '',
    ]"
    >
    <v-icon v-if="hasIcon" :name="icon" />
    {{innerButton}}
</button>
</template>