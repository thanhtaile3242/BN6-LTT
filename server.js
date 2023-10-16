const { User, Comment, Post } = require('./modal.js')

// User.create({
//   email: 'user@example.com',
//   password: 'password123',
//   name: 'John Doe',
//   // You can add other fields here as needed
// })


// const listUsers = [
//     { email: "user1@gmail.com", password: "pass123456", name: "Fullname1" },
//     { email: "user2@gmail.com", password: "pass123457", name: "Fullname2" },
//     { email: "user3@gmail.com", password: "pass123467", name: "Fullname3" },
//     { email: "user4@gmail.com", password: "pass123567", name: "Fullname4" },
//     { email: "user5@gmail.com", password: "pass124567", name: "Fullname5" },
// ];

// User.insertMany(listUsers);


// const listPosts = [
//     {
//         content: "Post1 here",
//         author: '652d46b537ff8c3ab281d49a',
//         likes: [{ _id: '652d46b537ff8c3ab281d499' }, { _id: '652d46b537ff8c3ab281d49b' }],
//     },
//     {
//         content: "Post2 here",
//         author: '652d46b537ff8c3ab281d499',
//         likes: [{ _id: '652d46b537ff8c3ab281d499' }, { _id: '652d46b537ff8c3ab281d49b' }],
//     },
//     {
//         content: "Post3 here",
//         author: '652d46b537ff8c3ab281d49b',
//         likes: [{ _id: '652d46b537ff8c3ab281d499' }, { _id: '652d46b537ff8c3ab281d49d'}],
//     },
//     {
//         content: "Post4 here",
//         author: '652d46b537ff8c3ab281d49d',
//         likes: [{ _id: '652d46b537ff8c3ab281d499' }, { _id: '652d46b537ff8c3ab281d49b' }],
//     },

// ]


// Post.insertMany(listPosts);


const listComments = [
    {
        author: '652d46b537ff8c3ab281d49a',
        content: "Comment1 here",
        post: '652d48eb871199c18eb5e2d6'
    },
    {
        author: '652d46b537ff8c3ab281d499',
        content: "Comment2 here",
        post: '652d48eb871199c18eb5e2d6'
    },
    {
        author: '652d46b537ff8c3ab281d49d',
        content: "Comment3 here",
        post: '652d48eb871199c18eb5e2d6'
    },
    {
        author: '652d46b537ff8c3ab281d49a',
        content: "Comment4 here",
        post: '652d48eb871199c18eb5e2d7'
    },
    {
        author: '652d46b537ff8c3ab281d49d',
        content: "Comment5 here",
        post: '652d48eb871199c18eb5e2d8'
    },
]
Comment.insertMany(listComments);