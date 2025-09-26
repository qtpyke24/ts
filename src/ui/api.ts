import express from 'express';
import { autocomplete, autocorrect } from '../core';
const app = express();
app.use(express.json());

//endpoint cho autocomplete
app.get('/autocomplete', (req, res) => {
    const input  = (req.query.input as string) || '';
    res.json({input, suggestions: autocomplete(input)});
});

//endpoint cho autocorrect
app.get('/autocorrect', (req, res) => {
    const input  = (req.query.input as string) || '';
    res.json({input, corrections: autocorrect(input)});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 API server chạy tại http://localhost:${PORT}`);
  console.log(`🔹 Test: http://localhost:${PORT}/autocomplete?input=ăn`);
});