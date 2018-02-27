<template>
    <div class="vue-cli">
        <router-link to="/">
            <div id="home"></div>
        </router-link>
        <slider>
            <slide-introduction/>
            <slide-vue-transition/>
            <slide-vue-transition-enter-leave/>
            <slide-vue-transition-flow/>
            <slide-vue-transition-hooks-mario/>
            <slide-vue-transition-hooks/>
            <slide-vue-transition-hooks-all/>
        </slider>
    </div>
</template>

<script>
    import Slider from '@/components/Slider.vue';
    import SlideIntroduction from '@/components/transitions/Slide-introduction.vue';
    import SlideVueTransition from '@/components/transitions/Slide-vue-transition.vue';
    import SlideVueTransitionEnterLeave from '@/components/transitions/Slide-vue-transition-enter-leave.vue';
    import SlideVueTransitionFlow from '@/components/transitions/Slide-vue-transition-flow.vue';
    import SlideVueTransitionHooksMario from '@/components/transitions/Slide-vue-transition-hooks-mario.vue';
    import SlideVueTransitionHooks from '@/components/transitions/Slide-vue-transition-hooks.vue';
    import SlideVueTransitionHooksAll from '@/components/transitions/Slide-vue-transition-hooks-all.vue';

    export default {
        name: "vue-cli",
        components: {
            Slider,
            SlideIntroduction,
            SlideVueTransition,
            SlideVueTransitionEnterLeave,
            SlideVueTransitionFlow,
            SlideVueTransitionHooksMario,
            SlideVueTransitionHooks,
            SlideVueTransitionHooksAll
        }
    };
</script>

<style scoped>
    a {
        color: #212121;
    }
</style>