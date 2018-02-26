<template>
    <div class="vue-cli">
        <router-link to="/">
            <div id="home"></div>
        </router-link>
        <slider>
            <slide-introduction/>
            <slide-installation/>
            <slide-first-application/>
            <slide-final/>
        </slider>
    </div>
</template>

<script>
    import Slider from '@/components/Slider.vue';
    import SlideIntroduction from '@/components/vueCli/Slide-introduction.vue';
    import SlideInstallation from '@/components/vueCli/Slide-installation.vue';
    import SlideFirstApplication from '@/components/vueCli/Slide-first-application.vue';
    import SlideFinal from '@/components/vueCli/Slide-final.vue';

    export default {
        name: "vue-cli",
        components: {
            Slider,
            SlideIntroduction,
            SlideInstallation,
            SlideFirstApplication,
            SlideFinal
        }
    };
</script>

<style scoped>
    a {
        color: #212121;
    }
</style>