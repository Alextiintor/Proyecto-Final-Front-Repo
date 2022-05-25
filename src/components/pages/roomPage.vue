<script>
    export default{
        data(){
            return {
                modal: true
            }
        },
        methods:{
            changePage: function(page){
                console.log(page);
                this.$emit('main-change-page', page);
            },
            closeModal: function(){
                console.log("close modal")
                this.modal = false;
                
            }
        },
        mounted() {
            import('../../robot/robot')
            import('../../ai/index')
        }
    }
</script>

<template>
    <div class="logo">
        <img src="/robotic-arm2.png" alt="">
        <h1>GESTBOT</h1>
    </div>

    <div class="modal-advise" v-if="modal==true">
        <p>Para el correcto funcionamiento de la página, asegurese de tener activada la <em>aceleracion por hardware</em> <a href="https://support.google.com/chrome/thread/12887258/activar-o-desactivar-la-aceleración-por-hardware-en-chrome?hl=es" target="_blank">Como activar</a>.</p>
        <i id="close" class="fa-solid fa-rectangle-xmark" @click="closeModal"></i>
    </div>

    <button class="btn btn-red btn-salir" @click="$emit('main-change-page', 'roomsPage')"> Salir </button>

    <div class="container">
        <iframe src="https://robot.gestbot.es" frameborder="0"></iframe>
        <div class="side">
            <div class="cam-container">
                <div class="cam">
                    <div class="video">
                        <video id="pose-video" class="layer" playsinline></video>
                        <canvas id="pose-canvas" class="layer"></canvas>
                    </div>
                </div>
                <div class="actual-gestures">
                    <table>
                        <tr class="row-grey">
                            <td class="name-column">Mano derecha</td>
                            <td id="right" class="gesture"></td>
                        </tr>
                        <tr>
                            <td class="name-column">Mano izquierda</td>
                            <td id="left" class="gesture"></td>
                        </tr>
                        <tr class="row-grey">
                            <td class="name-column">Estado</td>
                            <td id="state" class="gesture"></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="gesture-legend">
                <h3>Leyenda de gestos</h3>
                <table>
                    <!-- EJES -->
                    <tr class="row-grey">
                        <td class="gesture-name">Subir eje</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand-point-up"></i></td>
                    </tr>
                    <tr>
                        <td class="gesture-name">Bajar eje</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand-point-down"></i></td>
                    </tr>

                    <!-- MOVER -->
                    <tr class="row-grey">
                        <td class="gesture-name">Mover derecha</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand rotate-right"></i></td>
                    </tr>
                    <tr>
                        <td class="gesture-name">Mover izquierda</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand rotate-left"></i></td>
                    </tr>

                    <!-- ESTADO -->
                    <tr class="row-grey">
                        <td class="gesture-name">Pausar</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand"></i></td>
                    </tr>
                    <tr>
                        <td class="gesture-name">Reanudar</td>
                        <td class="gesture-icon"><img src="/imgs/icons/ok.png" alt="" srcset=""></td>
                    </tr>

                    <!-- Numeros -->
                    <tr class="row-grey">
                        <td class="gesture-name"></td>
                        <td class="gesture-icon"></td>
                        <!-- <td class="gesture-name">Dos</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand-peace"></i></td> -->
                    </tr>
                    <tr>
                        <td class="gesture-name"></td>
                        <td class="gesture-icon"></td>
                        <!-- <td class="gesture-name">tres</td>
                        <td class="gesture-icon"><img src="/imgs/icons/three-fingers.png" alt="" srcset=""></td> -->
                    </tr>
                    <tr class="row-grey">
                        <td class="gesture-name"></td>
                        <td class="gesture-icon"></td>
                        <!-- <td class="gesture-name">Cuatro</td>
                        <td class="gesture-icon"><img src="/imgs/icons/four-fingers.png" alt="" srcset=""></td> -->
                    </tr>
                </table>
            </div>
            <div class="local-robot" id="robot"></div>
        </div>
    </div>
</template>

<style scoped>
    /* Principio */
    h1{
        font-family: "Nova Flat";
        font-size: 42px;
        font-weight: 100;
        margin: 0;
        margin-top: 20px;
    }

    table{
        font-family: 'Asap';
    }
    .logo{
        position: absolute;
        display: flex;
        align-items: center;
    }
    .modal-advise{
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: 2vh;
        left: 20vw;
        width: 50vw;
        background-color: var(--white);
        border: 2px solid var(--blue);
        border-radius: 10px;
        padding: 1.5vh 1vw;
    }
    #close{
        font-size: 20px;
        color: var(--blue);
    }
    #close:hover{
        cursor: pointer;
        color: var(--red);
    }
    .btn-salir{
        position: absolute;
        bottom: 2vh;
        left: 1vw;
        width: 7vw;
        height: 7vh;
        font-size: 1.5rem;
    }
    .container{
        justify-content: unset !important;
        align-items: unset !important;
        border-bottom: 0px !important;
    }
    .logo img {
        width: 100px;
        height: 100px;
        margin: 10px;
        margin-right: 10px;
    }

    iframe{
        background-color: var(--grey);
        width: 75vw;
        height: 100vh;
    }
    .side{
        width: 25vw;
        height: 100vh;
    }
    .cam{
        height: 30vh;
    }
    .gesture-legend h3{
        padding-top: 5px;
        padding-bottom: 5px;
        font-family: "Nova Flat";
        text-align: center;
        background-color: var(--blue);
        color: var(--white);
    }
    .gesture-name{
        width: 70vw;
    }
    .gesture-icon{
        text-align: center;
        width: 30vw;
    }
    .rotate-right {
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);

    }
    .rotate-left {
        transform: rotate(-90deg) scale(-1, 1);
        /* Legacy vendor prefixes that you probably don't need... */

        /* Safari */
        -webkit-transform: rotate(-90deg) scale(-1, 1);

        /* Firefox */
        -moz-transform: rotate(-90deg) scale(-1, 1);

        /* IE */
        -ms-transform: rotate(-90deg) scale(-1, 1);

        /* Opera */
        -o-transform: rotate(-90deg) scale(-1, 1);

        position: relative;
    }
    table{
        z-index: 10;
        border-collapse: collapse;
        margin: 0px;
        padding: 0px;
        border: 0px;
    }
    tr{
        font-size: 1.25rem;
        height: 3.5vh;
    }
    tr .gesture-name{
        border-right: 2px solid var(--grey);
    }
    .row-grey{
        background-color: var(--grey);
    }
    .row-grey .gesture-name, .row-grey .name-column{
        border-right: 2px solid var(--white);
    }

    .name-column{
        font-size: 1.5rem;
        border-right: 2px solid var(--grey);
        width: 35vw;
    }
    .gesture{
        font-size: 1.2rem;
        text-align: center;
        width: 40vw;
    }
    .local-robot{
        height: 22.8vh;
        border: 1px solid black;
    }

    .cam video{
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        position: absolute;
        z-index: 1;
        height: 30vh;
        width: auto;
    }

    .cam canvas {
        position: relative;
        z-index: 2;
        height: 30vh;
        width: auto;
    }
</style>