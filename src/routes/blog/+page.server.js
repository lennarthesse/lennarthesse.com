// This script is used to extract the metadata from the posts
// and make it accessible to the post overview page

// Import error message and posts
import { error } from "@sveltejs/kit";
const modules = import.meta.glob('./posts/*.md', {eager: true});

// Initialize array to hold posts
const allPosts = [];

// For every imported post, push its metadata to the array
for (const path in modules) {
    const post = modules[path];
    if (post) {
        allPosts.push({...post.metadata});
    }
}

// Sort array based on post's date
const sortedPosts = allPosts
    .sort((a, b) =>
        new Date(a.date).getTime() > new Date(b.date).getTime()
            ? -1
            : new Date(a.date).getTime() < new Date(b.date).getTime()
            ? 1
            : 0
    );

// Export metadata to blog/+page.svelte and throw error if needed
export async function load() {
    const result = Object.keys(allPosts).map((index) => {
        const { slug, title, date, description, keywords} = allPosts[index];
        return {
            slug,
            title,
            date,
            description,
            keywords
        };
    });

    if (result) {
        return {
            posts: result
        };
    }

    throw error(500, "Failed to load blog posts");
}