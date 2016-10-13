var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = { 
     'article-one': {
    title: 'article-one|rohan kashyap',
    date: 'october 13 2016',
    content: ` <p>
                This is article-one
            </p>
            <p>
                Have a nice day
            </p>`
},
     'article-two': {
             title: 'article-two|rohan kashyap',
             date: 'october 12 2016',
             content:
            `<p>
                This is article-two
            </p>
            <p>
                Delighted and happy to create this
            </p>`
     },
     'article-three': { 
         
          title: 'article-two|rohan kashyap',
             date: 'october 11 2016',
             content:
            `<p>
                This is article-three
            </p>
            <p>
                Have a nice day
            </p>`
         
     },
    };
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var content = data.content;
    
var htmlTemplate =`
<html>
    <head>
        <title>
        ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href='/'>Go to home page</a>
        </div>
        <hr/>
        <div>
        <h2>${date}
        </h2>
        </div>
        <div>
        ${content}
        </div>
        </div>
        
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res){
    var articlename = req.params.articlename;
 res.send(createTemplate(articles[articlename]));
  });
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
