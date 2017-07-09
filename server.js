var express = require ('express');
var app = express();
app.get('/hello',function(req,res)
{res.send('Hello from server');});
app.listen(5888);

