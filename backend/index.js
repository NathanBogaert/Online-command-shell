import express from 'express';
import bodyParser from 'body-parser';
import { exec } from 'child_process';

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/command', (req, res) => {
    const command = req.body.command;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error.message}`);
            res.status(500).send(error.message);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            res.status(500).send(stderr);
            return;
        }
        console.log(`stdout: ${stdout}`);
        res.status(200).send(stdout);
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});