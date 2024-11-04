// Import the express library and assign it to a variable
import express from 'express'
// const expree from 'express'

// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  res.send("hello i am divija")
})


const festivals = {
    presidentsday: "17th February, 2025",
	holi: "14th March, 2025",
    rakhi:"9th August, 2025",
    diwali:"20th October, 2025",
    halloween:"31st October, 2025",
    christmas:"25th December, 2025"
}

app.get('/festivals', (req, res) => {
  const festivalName = req.query.festival; // Access the genre name
    if (!festivals[festivalName]) {
	    res.send(`Festival not found please try a different one!`);
    }
    res.send(`${festivalName}: ${festivals[festivalName]}`);
});

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})