// Extract metadata from posts for display on main page and sidebar

// Import error message and posts
import { error } from "@sveltejs/kit";
const paths = import.meta.glob('./posts/*.md', {eager: true});

// Initialize arrays to hold posts and categories
const posts = [];
const categories = [];

// For every imported path, push the post metadata and categories to the arrays
for (const path in paths) {
    const post = paths[path];
    if (post) {
        posts.push({...post.metadata});
        categories.push(...post.metadata.categories.replace(/\s+/g, "").split(","));
    }
}

// Sort array based on post's date
const recentPosts = posts.sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime()
        ? -1
        : new Date(a.date).getTime() < new Date(b.date).getTime()
            ? 1
            : 0
    );

// Export sorted array with metadata, array of categories with only unique values and throw error if needed
export function load() {
    if (recentPosts) {
        return {
            recentPosts: recentPosts,
            categories: categories.filter((value, index, array) => array.indexOf(value) === index)
        };
    }
    throw error(500, "Failed to load blog posts");
}