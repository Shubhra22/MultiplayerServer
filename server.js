var io = require('socket.io')(process.env.PORT || 3000);
console.log('server started');

io.on('connection',connectionCallback);

var playerCount = 0;
function connectionCallback(socket)
{
    console.log('client connected');

    playerCount++;
    socket.broadcast.emit('spawn');
    for(i = 0 ; i < playerCount ; i++)
    {
        socket.emit('spawn');
    }
    socket.on('disconnect',onDisconnected);

}

function onDisconnected(data)
{
    console.log('client disconnected');
    playerCount--;
}
