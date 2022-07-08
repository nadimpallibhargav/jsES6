"use strict"

const blogPosts = [
    {
        title: 'first blog post',
        content: 'content for the blog post one'
    },
    {
        title: 'second blog post',
        content: 'content for the blog post two'
    },
];

function blogRequest() {
    setTimeout(() => {
        let blogTitle = '';
        blogPosts.forEach(singleBlogs => {
            blogTitle += `<li>${singleBlogs.title}</li>`;
        });
        document.querySelector('body').innerHTML = blogTitle;
    }, 1000);
}

blogRequest();

function addBlogPost(addPost) {
    setTimeout(() => {
        blogPosts.push(addPost);
    }, 2000);
}

addBlogPost({name: 'third blog post', content: 'content for the blog post three'});