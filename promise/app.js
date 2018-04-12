var list = document.getElementById('list');

var posts = [
    {
        title: "Post One",
        body: "Body Post One"
    },
    {
        title: "Post Two",
        body: "Body Post Two"
    }
];

var post = { title: "Post Three", body: "Body post three" }

function createPost(post) {

    return new Promise(function(resolve, reject) {

        const error = true;
        if(!error) {
            setTimeout(function() {
                posts.push(post);
                resolve();
            }, 2000);
        } else {
            reject('Some kind of error is happened. Change the error value to false inside createPost(), to fix that');
        }

        
    });
    
}

function showPosts() {

    setTimeout(function() {
        posts.forEach(post => {
            var elem = document.createElement('li');
            elem.innerHTML = `<b>${post.title}</b><br><span>${post.body}</span>`;
            list.appendChild(elem);
        })
    }, 1000);

}

createPost(post)
    .then(showPosts)
    .catch(error => console.error(error));