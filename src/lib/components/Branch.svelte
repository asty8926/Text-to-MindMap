<script>
    import Node from "./Node.svelte";

    export let isMindMapNode = false

    export let name = "Branch"
    export let subnodes

    export let subnodesAmount = subnodes.length
    let isLastNodeOfBranch = subnodesAmount < 1
    
</script>

<div class="flex py-4 items-center mr-4 min-h-full gap-6 border-y-2 border-l-2 border-blue-300">
    <Node {name} {isLastNodeOfBranch} {subnodesAmount} {isMindMapNode} />
    <div class="flex flex-col gap-2">
        {#each subnodes as subnode}
            <svelte:self name={subnode.name} subnodes={subnode.nodes} />
        {/each}
    </div>
    
</div>

<style>

</style>