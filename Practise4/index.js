const http = require('http')
const { stringify } = require('querystring')
const blogs = require('./model/blogs')

$port = 3001
$host = "127.0.0.1"
const server = http.createServer((req, res) => {
    // if (req.method == "GET") {
    //     console.log(req.url)
    //     url_parameter = req.url.split('/')[1]
    //     console.log(url_parameter)
    //     res.setHeader('Content-Type', 'Application/JSON')
    //     res.end(JSON.stringify(`Hi ${url_parameter}`))
    // }
    console.log(req.url)

    if (req.url == "/blogs" && req.method == "GET") {
        res.setHeader("Content-type","Application/JSON")
        res.end(JSON.stringify(blogs))
    } else if (req.url.split('/')[1] == "blogs") {  //['','blogs','1']
        id = req.url.split('/')[2]
        blog = blogs.filter(blog => blog.id == id)
        res.setHeader("Content-type","Application/JSON")
        res.end(JSON.stringify(blog))
    } else if (req.url.split('/')[1].split('?')[0] == 'blogs' && req.method == 'GET') {

        key = req.url.split('/')[1].split('?')[1].split('=')[0]
        value = req.url.split('?')[1].split('=')[1]
        // ?order_by_date=true&result_count=2
        second_query_param = req.url.split('&')[1]
        key1 = second_query_param.split('=')[0]
        value1 = second_query_param.split('=')[1]
        console.log(typeof(value1))

        // u = req.url // /blogs?result_count=10&user_id=1&trending=true
        // qp = u.split("?")[1]   //result_count=10&user_id=1&trending=true
        // query_params = qp.split('&') //['result_count=10', 'trending=true']
        // for (qp in query_params) {
        //     key = qp.split('=')[0]
        //     value = qp.split('=')[1]

        // }


// Get  latest 5 blogs of user with user_id = 1

        if (key == 'user_id') {
            blog = blogs.filter(blog => blog.user_id == value)
        } if (key == "most_upvoted") {
            blog = {}
            max_upvotes = 0
            for (b in blogs) {
                console.log(b)
                if (blogs[b].upvotes > max_upvotes) {
                    max_upvotes = blogs[b].upvotes
                    blog = blogs[b]
                }
            }
        } if (key =='order_by_date') {
            if (key1 == 'asc' && value1 == 'false') {
                blog = blogs.sort((a,b) => (a.created_at > b.created_at)? 1: ((b.created_at < a.created_at)? -1: 0))
            }
            blog = blogs.sort((a,b) => (a.created_at > b.created_at)? 1: ((b.created_at > a.created_at)? -1: 0))
            if (key1 == 'result_count') {
                console.log("Here")
                blog = blog.slice(0,parseInt(value1))
            }
            
        }
        res.setHeader("Content-type","Application/JSON")
        res.end(JSON.stringify(blog))
    }
}).listen($port, ()=>{
    console.log(
        `Listening to http://${$host}:${$port}`
    )
})