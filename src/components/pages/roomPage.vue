<script setup>
</script>

<template>
    <div class="logo">
        <img src="robotic-arm2.png" alt="">
        <h1>GESTBOT</h1>
    </div>
    <div class="container">
        <iframe src="" frameborder="0"></iframe>
        <div class="side">
            <div class="cam-container">
                <div class="cam"></div>
                <div class="actual-gestures"></div>
            </div>
            <div class="gesture-legend">
                <h3>Leyenda de gestos</h3>
                <table>
                    <!-- EJES -->
                    <tr>
                        <td class="gesture-name">Subir eje</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand-point-up"></i></td>
                    </tr>
                    <tr>
                        <td class="gesture-name">Bajar eje</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand-point-down"></i></td>
                    </tr>

                    <!-- MOVER -->
                    <tr>
                        <td class="gesture-name">Mover derecha</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand-point-up"></i></td>
                    </tr>
                    <tr>
                        <td class="gesture-name">Mover izquierda</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand-point-down"></i></td>
                    </tr>

                    <!-- ESTADO -->
                    <tr>
                        <td class="gesture-name">Pausar</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand-point-up"></i></td>
                    </tr>
                    <tr>
                        <td class="gesture-name">Reanudar</td>
                        <td class="gesture-icon"><i class="fa-solid fa-hand-point-down"></i></td>
                    </tr>
                </table>
            </div>
            <div class="local-robot"></div>
        </div>
    </div>
</template>

<style scoped>
    .cam-container{
        border: 1px solid var(--black);
    }
    .gesture-legend{
        font-family: 'Asap';
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


    /* Principio */
    h1{
        font-family: "Nova Flat";
        font-size: 42px;
        font-weight: 100;
        margin: 0;
        margin-top: 20px;
    }
    .logo{
        position: absolute;
        display: flex;
        align-items: center;
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
</style>