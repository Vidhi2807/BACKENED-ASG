const express = require('express');
const noteRoutes = require('./routes/note.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/note', noteRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ msg: 'Route not found.' });
});

module.exports = app;