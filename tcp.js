import * as net from "net"; //let us create a telnet server tcp

const server = net.createServer(socket => {
    console.log("client connected");
    socket.on("end", () => {
        console.log("client disconnected");
    });
    socket.on("data", data => {
        console.log(data.toString());
    });
    socket.pipe(socket).pipe(socket); // this pipe function does something strange. Check the client when you are connecting
    socket.write("Hello.");
});

server.listen(8080, () => {
    console.log("server bound.");
});

/*To connect to this server, 
1. open command prompt
2. telnet localhost 8080

*/