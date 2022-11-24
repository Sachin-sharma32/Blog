export default {
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
        },
        {
            title: "Post",
            name: "post",
            type: "array",
            of: [{ type: "reference", to: [{ type: "post" }] }],
        },
    ],
};
