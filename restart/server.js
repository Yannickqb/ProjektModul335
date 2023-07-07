const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// GET /events endpoint to fetch all events
app.get('/events', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data from db.json:', err);
      res.sendStatus(500);
    } else {
      const db = JSON.parse(data);
      res.json(db.events);
    }
  });
});

// PUT /events/:id endpoint to update an event
app.put('/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const eventData = req.body;

  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data from db.json:', err);
      res.sendStatus(500);
    } else {
      const db = JSON.parse(data);
      const eventIndex = db.events.findIndex((event) => event.id === eventId);

      if (eventIndex !== -1) {
        db.events[eventIndex] = eventData;

        fs.writeFile('db.json', JSON.stringify(db), 'utf8', (err) => {
          if (err) {
            console.error('Error writing data to db.json:', err);
            res.sendStatus(500);
          } else {
            res.json(eventData);
          }
        });
      } else {
        res.sendStatus(404);
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
