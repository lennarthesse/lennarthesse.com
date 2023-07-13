// Extract metadata from posts for display on main page and sidebar

// Import error message and posts
import { error } from "@sveltejs/kit";
const paths = import.meta.glob('./posts/*.md', {eager: true});

// Initialize array to hold posts
const posts = [];

// For every imported path, push the post metadata to the array
for (const path in paths) {
    const post = paths[path];
    if (post) {
        posts.push({...post.metadata});
    }
}

// Sort array based on post's date
const sortedPosts = posts.sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime()
        ? -1
        : new Date(a.date).getTime() < new Date(b.date).getTime()
            ? 1
            : 0
    );

// Export sorted array with metadata and throw error if needed
export function load() {
    if (sortedPosts) {
        return {
            posts: sortedPosts
        };
    }
    throw error(500, "Failed to load blog posts");
}