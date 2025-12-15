<template>
    <div class="backdrop">
        <div class="modal">
            <!-- <img :src="source" alt=""> -->
             aaaa
        </div>
    </div>
</template>

<script>
    export default{
        props: ['source'],
        // emits: ["closeModal"],
        // methods: {
        //     closeModal(){
        //         this.$emit('close');
        //     }
        // }
    }
</script>

<style >
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .modal{
        width: 100px;
        height: 100px;
    }
     /* .modal{
        width: 80vw;
        height: 70vh;
        padding: 20px;
        margin: 100px auto;
        background-color: white;
        border-radius: 10px;
    } */
    .backdrop{
        top: 0;
        background-color: rgba(0, 0, 0, 0.75);
        width: 100%;
        height: 100px;
    }
</style>