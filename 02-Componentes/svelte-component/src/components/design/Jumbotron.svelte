<script>
    import {onMount,onDestroy,beforeUpdate,afterUpdate,tick} from 'svelte'
    export let name;
    let show;

    function enter(){
        show=true
    }

    function exit(){
        show=false
    }


    //**Ciclo de vida**
    //creacion
    //scripts
    console.log("Ejecutando 1º Scripts")

    //onMount
    onMount(async()=>{
        console.log("Ejecuta 2º en onMount")
        await tick()
        console.log("se ejecuta cuando todos los metodos ya han acabado, tick")
    })
    //onDestroy
    onDestroy(()=>{
        console.log("Eliminando componenten en onDestroy")

    })

    //actualizar el dom
    //beforeUpdate
    beforeUpdate(()=>{
        console.log("se ejecuta antes de actualizar el dom en beforeUpdate")
    })
    //afterUpdate
    afterUpdate(()=>{
        console.log("se ejecuta despues de actualizar el dom en afterUpdate")
    })
    //tick

</script>

<style>
    h2{color:red;font-weight: bolder;text-decoration: underline;}
    p{text-align: justify; color: aqua;}
</style>

<div class="jumbotron mt-4" on:mouseenter={enter} on:mouseleave={exit}>
    <h1>{name}</h1>
    <h2>
        <slot name="subtitle">
            <span>Agregar aqui....</span>
        </slot>
    </h2>

    <p><slot name="text"><span>Parrafo aqui</span></slot></p>
    <hr/>
    --<slot show={show}>..</slot>--
</div>