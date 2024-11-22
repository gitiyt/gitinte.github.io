const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Endpoint for match schedule
app.get('/schedule', (req, res) => {
    const schedule = [
        { match: "Team A vs Team B", time: "18:00 UTC" },
        { match: "Team C vs Team D", time: "20:00 UTC" }
    ];
    res.json(schedule);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
