<script>
    import Node from "$lib/components/Node.svelte";
    import Branch from "./Branch.svelte";

    export let mindMap

</script>

<div class="flex gap-9 border-2 max-w-min pl-4 pr-2 py-4 min-w-fit rounded-md m-4 h-fit">
    <Branch name={mindMap.name} subnodes={mindMap.nodes} isMindMapNode />
</div>
