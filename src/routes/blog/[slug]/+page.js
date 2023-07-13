// Load blog content

// Import error message and posts
import { error } from "@sveltejs/kit";
const paths = import.meta.glob('../posts/*.md', {eager: true});

// Initialize array to hold posts
const posts = [];

// For every imported post, push it and its slug to the array
for (const path in paths) {
    const post = paths[path];
    if (post) {
        posts.push(post);
    }
}

// Linear search through all posts to find matching slug and
// return its data or throw not found error
export function load({ params }) {
    const { slug } = params;
    for (const p in posts) {
        const post = posts[p];
        if (post.metadata.slug.toLowerCase() === slug.toLowerCase()) {
            return {
                post: post
            }
        }
    }
    throw error(404, "Not found");
}