<script>
    import robotGif from "../../../public/imgs/robot.gif"

    export default {
        props: {
            cardNumber: Number
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-img">
            <span class="roomNumber">Sala {{ cardNumber }}</span>
            <img src="/imgs/robot.gif" alt="gif de un robot">
        </div>
        <div class="card-footer" @click="$emit('change-page', 'roomPage')"> Entrar </div>
    </div>
</template>


<style scoped>
.card{
    border-radius: 10px;
    font-family: 'Asap';
    width: 21vw;
    box-shadow: 8px 10px 20px 8px rgba(0,0,0,0.26);
    -webkit-box-shadow: 8px 10px 20px 8px rgba(0,0,0,0.26);
    -moz-box-shadow: 8px 10px 20px 8px rgba(0,0,0,0.26);
}
.card-img{
    position: relative;

    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    border-radius: 10px 10px 0px 0px;

    background-size: cover;
    height: 25vh;
}

.card-img img{
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    max-height: 100%;
    display: block;
}

.card-img .roomNumber{
    position: absolute;
    right: 10px;
    z-index: 10;
}

.card-footer{
    font-size: 2rem;
    font-weight: bold;
    height: 14vh;
    border-radius: 0px 0px 10px 10px;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
}

.card-footer:hover{
    cursor: pointer;
    background: linear-gradient(145deg, #015eba, #209aff);
}
</style>
