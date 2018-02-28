<template>
    <div id="slide-introduction">
        <h1>Transitions</h1>

        <div class="quote">
            <p>CSS transitions allows you to change property values smoothly (from one value to another), over a given duration.</p>
            <p>w3schools.com</p>
        </div>

        <div class="clearfix" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <div id="css-transition" class="blackbox">
                <div class="code">
                    <span>#css-transition-example {</span><br />
                        <span><i class="tab"></i>.</span><br />
                        <span><i class="tab"></i>.</span><br />
                        <span><i class="tab"></i>.</span><br />
                        <span><i class="tab"></i>-webkit-transition: opacity 300ms ease-in;</span><br />
                        <span><i class="tab"></i>-moz-transition: opacity 300ms ease-in;</span><br />
                        <span><i class="tab"></i>-o-transition: opacity 300ms ease-in;</span><br />
                        <span><i class="tab"></i>transition: opacity 300ms ease-in;</span><br />
                    <span>}</span>
                </div>
            </div>

            <div id="css-transition-example"></div>
        </div>

        <div :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">
            <h2>SASS and Mixin</h2>

            <p>it is possible to regroup all the cross-browser transition commands using a Mixin</p>

            <div id="mixin-example" class="blackbox">
                <div class="code">
                    <span>@mixin transition($transition) { ... } <i class="tab"></i> @mixin transition-property($property) { ... }</span><br />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#css-transition {
  float: left;
  width: 50%;
  margin-right: 5%;
}
#css-transition-example {
  float: left;
  width: 200px;
  height: 200px;
  background: #ca5b10;
  margin: 110px 0 0 150px;
  border-radius: 50%;
  opacity: 1;
  cursor: cell;
  -webkit-transition: opacity 300ms ease-in;
  -moz-transition: opacity 300ms ease-in;
  -o-transition: opacity 300ms ease-in;
  transition: opacity 300ms ease-in;
}
#css-transition-example:hover {
  opacity: 0.5;
}

#mixin-example {
  text-align: center;
}
</style>
