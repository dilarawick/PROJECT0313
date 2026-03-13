//port config
const port = 3001;
//express config
const exp = require('express');
const path = require('path');
//config the server application
const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));
app.use(exp.static(path.join(__dirname, 'public')));
const students = [
    { name: "Dilara", batch: "24.1" },
    { name: "Nulara", batch: "24.1" },
    { name: "Tharu", batch: "24.1" },
    { name: "Miyu", batch: "24.1" },    
    { name: "Chamu", batch: "24.1" },
];


app.get('/', (req, res) => {
    students.forEach(student => {
        console.log(`${student.name} - ${student.batch}`);
    });

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/greet', (req, res) => {
    const name = (req.body && req.body.username ? req.body.username : '').trim() || 'Guest';

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Greeting Result</title>
          <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
          <div class="container">
              <h1 class="title">Greeting</h1>
              <p class="greeting-text">Hello, <span class="highlight">${name}</span>!</p>
              <a href="/" class="back-link">Back</a>
          </div>
      </body>
      </html>
    `);
});

//old way
/*
app.listen(port, function() {
  console.log(`${port}`);
});*/

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//new way
//app.listen(port);

/*
let name = ""
*/

app.get('/api/HI', (req, res) => {
    res.json({ message: "HELLO" });
});
