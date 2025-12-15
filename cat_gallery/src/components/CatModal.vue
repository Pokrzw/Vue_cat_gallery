<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal">
            <img :src="image" alt="modal" class="modal_img" >
        </div>
    </div>
</template>

<script>
export default{
    props: ['image'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .backdrop{
        position: fixed;
        display: flex;
        flex-direction: column;
        top:0;
        align-items: center;
        justify-content: center;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 100vh;
    }

    .modal{
        width: 80vw;
        height: 80vh;
    }

    @keyframes open{
    0%{height: 0px;}
    100%{height: 80%;}
}
    img.modal_img{
        width: 80%;
        height: 80%;
        animation-name: open;
        animation-duration: 1s;
        object-fit: cover;
    }

</style>