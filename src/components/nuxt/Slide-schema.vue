<template>
    <div id="slide-schema">
        <h1>Nuxt Schema</h1>

        <div class="blackbox" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <img src="@/assets/nuxt/nuxt-schema.png">
        </div>
    </div>
</template>

<style scoped>
.blackbox {
  display: inline-block;
}
img {
  margin: 40px auto;
}
</style>
