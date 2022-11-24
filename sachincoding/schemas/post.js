export default {
    title: "Post",
    name: "post",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "string",
        },
        {
            title: "Excerpt",
            name: "excerpt",
            type: "string",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                },
                {
                    name: "code",
                    title: "Code",
                    type: "code",
                    options: {
                        theme: "solarized_dark",
                    },
                },
                {
                    type: "image",
                    fields: [
                        {
                            type: "text",
                            name: "alt",
                            title: "Alternative text",
                            description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
                            options: {
                                isHighlighted: true,
                            },
                        },
                    ],
                },
            ],
        },
        {
            title: "Featured Image",
            name: "featuredImg",
            type: "image",
        },
        {
            title: "Featured Post",
            name: "featuredPost",
            type: "boolean",
        },
        {
            name: "author",
            type: "object",
            fields: [
                {
                    title: "Author",
                    name: "author",
                    type: "reference",
                    to: [{ type: "author" }],
                },
            ],
        },
        {
            name: "category",
            type: "object",
            fields: [
                {
                    title: "Category",
                    name: "category",
                    type: "reference",
                    to: [{ type: "category" }],
                },
            ],
        },
        {
            title: "CreateAt",
            name: "createAt",
            type: "datetime",
        },
    ],
};
