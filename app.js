const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

let posts = [];

app.get('/', (req, res) => {
    const hasPosts = posts.length > 0;
    res.render('index', { posts: posts, body: "", hasPosts: hasPosts });
});

app.get('/create_post', (req, res) => {
    res.render('create_post');
});

app.post('/create_post', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});

app.get('/edit_post/:id', (req, res) => {
    const id = req.params.id;
    const post = posts[id];
    res.render('edit_post', { id, post });
});

app.post('/edit_post/:id', (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;
    posts[id] = { title, content };
    res.redirect('/');
});

app.get('/delete_post/:id', (req, res) => {
    const id = req.params.id;
    posts.splice(id, 1);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
