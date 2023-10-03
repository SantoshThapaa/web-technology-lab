const blogs = [
    {
        id: 1,
        title: "Essentials of JavaScript",
        author: "Santosh Thapa",
        joinedDate: '2023-08-07T09:01:14Z',
        readBy: 100,
        commentCount: 120,
        status: 'Published',
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/009/171/100/small/demo-symbol-concept-words-demo-on-wooden-blocks-photo.jpg'
    },
    {
        id: 2,
        title: "How to started with react",
        author: "Shishir Poudel",
        joinedDate: '2023-09-15T14:23:45Z',
        readBy: 85,
        commentCount: 90,
        status: 'Archived',
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/009/171/100/small/demo-symbol-concept-words-demo-on-wooden-blocks-photo.jpg'
    }
];
function createBlogPost(blog) {
    const blogContainer = document.getElementById('blog-container');

    const blogPost = document.createElement('div');
    blogPost.className = 'blog-post';

    const title = document.createElement('h2');
    title.textContent = blog.title;

    const author = document.createElement('p');
    author.textContent = `Author: ${blog.author}`;

    const joinedDate = document.createElement('p');
    joinedDate.textContent = `Joined Date: ${new Date(blog.joinedDate).toLocaleDateString()}`;

    const readBy = document.createElement('p');
    readBy.textContent = `Read by: ${blog.readBy} people`;

    const commentCount = document.createElement('p');
    commentCount.textContent = `Received comments: ${blog.commentCount}`;

    const statusButton = document.createElement('button');
    statusButton.textContent = getStatusButtonText(blog.status);
    statusButton.onclick = () => toggleStatus(blog);

    const image = document.createElement('img');
    image.src = blog.imageUrl;
    image.alt = blog.title;

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Add Comment';
    commentButton.onclick = () => increaseCommentCount(blog);

    const viewButton = document.createElement('button');
    viewButton.textContent = 'Read It';
    viewButton.onclick = () => increaseReadCount(blog);
    blogPost.appendChild(title);
    blogPost.appendChild(author);
    blogPost.appendChild(joinedDate);
    blogPost.appendChild(readBy);
    blogPost.appendChild(commentCount);
    blogPost.appendChild(statusButton);
    blogPost.appendChild(image);
    blogPost.appendChild(commentButton);
    blogPost.appendChild(viewButton);
    blogContainer.appendChild(blogPost);
}
function toggleStatus(blog) {
    switch (blog.status) {
        case 'Published':
            blog.status = 'Archived';
            break;
        case 'Archived':
            blog.status = 'Draft';
            break;
        case 'Draft':
            blog.status = 'Published';
            break;
    }
    updateDisplay();
}
function updateDisplay() {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = '';
    blogs.forEach(blog => {
        createBlogPost(blog);
    });
}
function getStatusButtonText(status) {
    switch (status) {
        case 'Published':
            return 'Archive';
        case 'Archived':
            return 'Draft';
        case 'Draft':
            return 'Publish';
    }
}
function increaseCommentCount(blog) {
    blog.commentCount++;
    updateDisplay();
}
function increaseReadCount(blog) {
    blog.readBy++;
    updateDisplay();
}
updateDisplay();
