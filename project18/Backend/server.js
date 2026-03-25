const express = require('express');
const cors = require('cors');
const http = require('http');
const multer = require('multer');
const { Server } = require('socket.io');
const app = express();

const server = http.createServer(app);

const allowedOrigins = ['http://localhost:5500'];
app.use(cors({
    origin: allowedOrigins
}));

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('photo'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send({
        message: 'File uploaded successfully',
        filePath: `/public/uploads/${req.file.filename}`
    });
});

const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('A user connected ' + socket.id);

    socket.on('receiveMessage', (data) => {
        console.log('Message received: ' + data);
        socket.emit('sendMessage', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected ' + socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});