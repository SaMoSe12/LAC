<script setup lang="ts">
import {ref, watch} from 'vue'
const props = defineProps<{
    hasIcon: boolean
    icon?: string
    rounded?: boolean
    transparent?: boolean
    innerClass?: string
}>()
const changeIcon = ref(false)
watch(
    () => props.icon, () => {
        changeIcon.value = !changeIcon.value
    } 
)

</script>
<template>
    <button class="
    font-bold 
    py-2 
    px-4
    max-w-fit
    " 
    :class="[
        (rounded) ? 'rounded-full' : 'rounded',
        (transparent) ? 'bg-babyBlue-500/15 text-babyBlue-500 hover:bg-babyBlue-500/50 hover:text-neutral-100 border-2 border-babyBlue-500/5 hover:border-babyBlue-500' : 'bg-babyBlue-500 hover:bg-babyBlue-700 text-neutral-100',
        (innerClass) ? innerClass : '',
    ]"
    >
    <v-icon v-if="hasIcon" :name="(changeIcon) ? props.icon : icon" :class="($slots['innerButton']) ? 'mr-3' : ''" />
    <slot name="innerButton"></slot>
</button>
</template>