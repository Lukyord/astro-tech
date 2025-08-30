import { config, fields, collection } from "@keystatic/core";

export default config({
    storage: {
        kind: "local",
    },

    collections: {
        posts: collection({
            label: "Posts",
            slugField: "title",
            path: "src/content/posts/*",
            format: { contentField: "content" },
            schema: {
                title: fields.slug({ name: { label: "Title" } }),
                featuredImage: fields.image({
                    label: "Featured Image",
                    directory: "public/images/posts",
                    publicPath: "/images/posts/",
                }),
                content: fields.markdoc({
                    label: "Content",
                    options: {
                        image: {
                            directory: "public/images/posts",
                            publicPath: "/images/posts/",
                        },
                    },
                }),
            },
        }),
    },
});
