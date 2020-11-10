
<template>
<section class="sidebar">
    <div class="col col-1">
        <div class="prop rotate">
            <div class=" prop-desc rotate-desc">
                <h3>Rotate</h3>
                <p>{{rotateInput}}</p>    
            </div>
            <div class="input rotate-input">
                <input @input="skuska()" type="range" min="0" max="100" v-model="rotateInput">
            </div>
        </div>
        <div class="prop rotate__Y">
            <div class=" prop-desc rotate__Y-desc">
                <h3>Rotate-Y</h3>
                <p>{{rotateInputY}}</p>   
            </div>
            <div class="input rotate__Y-input">
                <input type="range" min="0" max="100" v-model="rotateInputY">
            </div>
        </div>
        <div class="prop rotate__X">
            <div class=" prop-desc rotate__X-desc">
                <h3>Rotate-X</h3>
                <p>{{rotateInputX}}</p>    
            </div>
            <div class="input rotate__X-input">
                <input type="range" min="0" max="100" v-model="rotateInputX">
            </div>
        </div>
        <div class="prop rotate__Z">
            <div class=" prop-desc rotate__Z-desc">
                <h3>Rotate-Z</h3>
                <p>{{rotateInputZ}}</p>  
            </div>
            <div class="input rotate__Z-input">
                <input type="range" min="0" max="100" v-model="rotateInputZ">
            </div>
        </div>
    </div>
    <div class="col col-2">
        <div class="prop skew__Y">
            <div class=" prop-desc skew__Y-desc">
                <h3>Skew-Y</h3>
                <p>{{skewY}}</p>    
            </div>
            <div class="input skew__Y-input">
                <input type="range" min="0" max="100" v-model="skewY">
            </div>
        </div>
        <div class="prop skew__X">
            <div class=" prop-desc skew__X-desc">
                <h3>Skew-X</h3>
                <p>{{skewX}}</p>    
            </div>
            <div class="input skew__X-input">
                <input type="range" min="0" max="100" v-model="skewX">
            </div>
        </div>
        <div class="prop scale">
            <div class=" prop-desc scale-desc">
                <h3>Scale</h3>
                <p>{{scale}}</p>    
            </div>
            <div class="input scale-input">
                <input type="range" min="0" max="100" v-model="scale">
            </div>
        </div>
    </div>
    <div class="col col-3">
        <div class="prop transform">
            <div class=" prop-desc transform-desc">
                <h3>Transform</h3>
                <p>{{transform}}</p>    
            </div>
            <div class="input transform-input">
                <input type="range" min="0" max="100" v-model="transform">
            </div>
        </div>
        <div class="prop transform__Y">
            <div class=" prop-desc transform__Y-desc">
                <h3>Transform-Y</h3>
                <p>{{transformY}}</p>    
            </div>
            <div class="input transform__Y-input">
                <input type="range" min="0" max="100" v-model="transformY">
            </div>
        </div>
        <div class="prop transform__X">
            <div class=" prop-desc transform__X-desc">
                <h3>Transform-X</h3>
                <p>{{transformX}}</p>    
            </div>
            <div class="input transform__X-input">
                <input type="range" min="0" max="100" v-model="transformX">
            </div>
        </div>
        <div class="prop perspective">
            <div class=" prop-desc perspective-desc">
                <h3>Perspective</h3>
                <p>{{perspective}}</p>    
            </div>
            <div class="input perspective-input">
                <input type="range" min="0" max="100" v-model="perspective">
            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        data() {
            return {
                rotateInput : 0,
                rotateInputY : 0,
                rotateInputX : 0,
                rotateInputZ : 0,
                skewY : 0,
                skewX : 0,
                scale : 0,
                transform : 0,
                transformY : 0,
                transformX : 0,
                perspective : 0,
            }
        },
        methods: {
            skuska() {
                this.$root.$emit('rot',this.rotateInput);
            }
        },
    }
</script>

<style lang="scss" scoped>


.sidebar{
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-height: 35vh;
    background: $sidebar-bg;
}

.col{
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.prop{
    width: 60%;
    margin: 5px 0;

    .prop-desc{
        color: $color-primary;
        display: flex;
        justify-content: space-between;
        margin: 0.6em 0;
    }

    p{
        background: $value-box-bg;
        width: 60px;
        height: 25px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

input[type=range]{
    -webkit-appearance: none;
    background: $input-range-bg;
    border-radius: 15px;
    width: 100%;
    height: 8px;
    cursor: pointer;
}

input[type=range]:focus{
    outline: none;
}

input[type=range]::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: $slider-thumb-color;

}

</style>