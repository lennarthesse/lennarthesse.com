// Import error message and posts
import { error } from "@sveltejs/kit";
const modules = import.meta.glob('../posts/*.md', {eager: true});

// Initialize array to hold posts
const allPosts = [];

// For every imported post, push it and its slug to the array
for (const path in modules) {
    const post = modules[path];
    if (post) {
        const slug = post.metadata.slug;
        const title = post.metadata.title;
        const p = {post, slug, title};
        allPosts.push(p);
    }
}

// Linear search through all posts to find matching slug and
// return its data or throw not found error
export function load({ params }) {
    const { slug } = params;
    for (const path in allPosts) {
        const post = allPosts[path];
        if (post.slug == slug) {
            return {
                post: post
            }
        }
    }
    throw error(404, "Not found");
}