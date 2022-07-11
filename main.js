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

            const error = false;

            if(error == true) {
                reject('error has occured');
            } else {
                resolve();
            }

        }, 2000);
    });
}

async function init() {
    await addBlogPost({title: 'third blog post', content: 'content for the blog post three'});

    blogRequest();
}

init();