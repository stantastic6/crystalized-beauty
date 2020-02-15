const express = require('express');
import { Application, Request, Response } from 'express';
import path from 'path';

const app: Application = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req: Request, res: Response) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
