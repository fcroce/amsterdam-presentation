<template>
    <div class="vue-cli">
        <div id="home">
            <router-link to="/">Home</router-link>
        </div>
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
    #home {
        display: block;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
    }
    a {
        color: #212121;
    }
</style>