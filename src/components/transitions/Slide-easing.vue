<template>
    <div id="slide-easing">
        <h1>Transition Timing Functions</h1>

        <h2>It's the speed curve of the transition effect</h2>

        <div :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <p>You can see the four most common transition, well explained in this image</p>

            <img src="@/assets/transitions/easing.png">
        </div>
    </div>
</template>

<style scoped>
img {
  margin: 60px 0;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
}
</style>
