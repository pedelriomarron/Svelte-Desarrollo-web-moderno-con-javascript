<script>
    export let value;
    export let placeholder;
    export let type;
    export let name;
    export let id;
    
</script>

<div class="form-group">
    <label id="label-{id}" >{name}</label>
    {#if type=== 'textarea'}
        <textarea {id} {placeholder} {value} rows="10" on:input class="form-control"></textarea>
    {:else}
        <input {type} {id} {placeholder} {value} on:input class="form-control" />
    {/if}
</div>