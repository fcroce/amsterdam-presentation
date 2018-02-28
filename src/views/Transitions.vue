<template>
    <div class="transitions">
        <router-link to="/">
            <div id="home"></div>
        </router-link>
        <slider>
            <slide-introduction/>
            <slide-evolution/>
            <slide-vue-transition/>
            <slide-vue-transition-enter-leave/>
            <slide-vue-transition-flow/>
            <slide-vue-transition-hooks-mario/>
            <slide-vue-transition-hooks/>
            <slide-vue-transition-hooks-all/>
            <slide-success/>
            <slide-vue-state-transition/>
            <slide-tweezing/>
            <slide-make-cool-animations/>
        </slider>
    </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import SlideIntroduction from "@/components/transitions/Slide-introduction.vue";
import SlideEvolution from "@/components/transitions/Slide-evolution.vue";
import SlideVueTransition from "@/components/transitions/Slide-vue-transition.vue";
import SlideVueTransitionEnterLeave from "@/components/transitions/Slide-vue-transition-enter-leave.vue";
import SlideVueTransitionFlow from "@/components/transitions/Slide-vue-transition-flow.vue";
import SlideVueTransitionHooksMario from "@/components/transitions/Slide-vue-transition-hooks-mario.vue";
import SlideVueTransitionHooks from "@/components/transitions/Slide-vue-transition-hooks.vue";
import SlideVueTransitionHooksAll from "@/components/transitions/Slide-vue-transition-hooks-all.vue";
import SlideSuccess from "@/components/transitions/Slide-success.vue";
import SlideVueStateTransition from "@/components/transitions/Slide-vue-state-transition.vue";
import SlideTweezing from "@/components/transitions/Slide-tweezing.vue";
import SlideMakeCoolAnimations from "@/components/transitions/Slide-make-cool-animations.vue";

export default {
  name: "transitions",
  components: {
    Slider,
    SlideIntroduction,
    SlideEvolution,
    SlideVueTransition,
    SlideVueTransitionEnterLeave,
    SlideVueTransitionFlow,
    SlideVueTransitionHooksMario,
    SlideVueTransitionHooks,
    SlideVueTransitionHooksAll,
    SlideSuccess,
    SlideVueStateTransition,
    SlideTweezing,
    SlideMakeCoolAnimations
  }
};
</script>

<style scoped>
a {
  color: #212121;
}
</style>
