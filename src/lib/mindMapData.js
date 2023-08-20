export let mindMap = {
    name: "Web project",
    direction: "horizontal", // || vertical || tdb || ltr || hz || vt
    theme: "light", // || "dark" || ...
    nodes: [
        {
            name: "i18n",
            /*icon: {
                name: "earth",
                position: "left", // || right
                color: "pink" // Should take colors from a JS file
            },*/
            url: "https://example.com/",
            markdown: "",
            nodes: [
                {
                    name: "Libraries",
                    markdown: "",
                    nodes: [
                        {
                            name: "svelte-i18n",
                            nodes: []
                        }
                    ]
                },
                {
                    name: "Resources",
                    markdown: "# Great resource\n[hyperlink](https://example.com)\n- **test**\n---\n",
                    nodes: []
                },
                {
                    name: "Accessibility Dev Tools",
                    nodes: []
                }
            ]
        },
        {
            name: "a11y",
            url: "https://developer.mozilla.org",
            fontWeight: "bold", // "500" || "600" || "normal"
            nodes: [
                {
                    name: "Aria Labels",
                    nodes: []
                }
            ]
        },
            {
                name: "Accessibility Dev Tools",
                nodes: []
            }
    ]
}