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

function addBlogPost(addPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogPosts.push(addPost);

            const error = true;

            if(error == true) {
                reject('error hs occured');
            } else {
                resolve();
            }

        }, 2000);
    });
}

addBlogPost({name: 'third blog post', content: 'content for the blog post three'}).then(blogRequest);