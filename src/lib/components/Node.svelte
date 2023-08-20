<script>
    export let name = "Node"
    export let url = ""
    export let isLastNodeOfBranch = false
    export let subnodesAmount

    export let isMindMapNode

    let isMiddleNode = !isLastNodeOfBranch && (subnodesAmount >= 1)

    let isMiddleNodeWithSubnodes = !isLastNodeOfBranch && (subnodesAmount >= 2)

    let afterClassString = "after:absolute after:content-[''] after:top-1/2 after:right-0 after:w-4 after:h-0.5 after:bg-black"
</script>

<div class={`relative rounded-md font-bold px-6 py-4 text-yellow-300 bg-white cursor-pointer select-none flex items-center justify-center hover:bg-yellow-400 hover:text-white border-2 border-yellow-300 m-2 max-h-8 max-w-fit last:mr-20 ${isMindMapNode ? "mindMapNode" : isLastNodeOfBranch ? "lastNode" : isMiddleNodeWithSubnodes ? "middleNodeWithSubnodes" : isMiddleNode ? "middleNode" : ""}`}>
    <a class="flex-wrap flex min-w-max" href={url}>{name}</a>
</div>

<style>
    :root {
        --line-w: 1.3rem;
        --line-thickness: .2rem;
        --line-bg: darkgray;
    }

    .lastNode::before {
        content: '';
        position: absolute;
        top: 50%;
        width: calc(var(--line-w) / 2);
        height: .2rem;
        background-color: var(--line-bg);
        left: 0;
        transform: translateX(calc(var(--line-w) * -1 / 2));
    }

    .mindMapNode::before {
        content: '';
        position: absolute;
        top: 50%;
        width: calc(var(--line-w) / 2);
        height: .2rem;
        background-color: var(--line-bg);
        right: 0;
        transform: translateX(calc(var(--line-w) * 1 / 2));
    }

    .middleNodeWithSubnodes::before,
    .middleNode::before {
        content: '';
        position: absolute;
        top: 50%;
        /* width: calc(var(--line-w) / 2); */
        width: calc(100% + var(--line-w));
        height: var(--line-thickness);
        background-color: var(--line-bg);
        left: calc(var(--line-w) * -1 / 2);
        z-index: -1;
    }

    .middleNodeWithSubnodes::after {
        content: '';
        position: absolute;
        width: calc(var(--line-thickness) / 1.5);
        height: 10rem;
        background-color: var(--line-bg);
        /* background-color: red; */
        right: 0;
        transform: translateX(calc(var(--line-w) * 1 / 2))
        translateY(calc(-50%));
        top: 50%;
    }

    .mindMapNode {
        background-color: lightblue;
        color: white;
        padding: 1.5rem 2rem;
        transform: translateY(1rem);
    }

</style>