//port config
const port = 3001;
//express config
const exp = require ('express');
//config the server application
const app = exp();

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

    res.send('Student names and their batches!');
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
