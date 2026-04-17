import { Server, Socket } from "socket.io";
export const signalingHandler = (io: Server, socket: Socket) => {
  socket.on("join-room", ({ roomId, userId }) => {
    socket.join(roomId);

    socket.to(roomId).emit("peer-joined", userId);

    socket.on("offer", ({ offer, to }) => {
      io.to(to).emit("offer", { offer, from: socket.id });
    });

    socket.on("answer", ({ answer, to }) => {
      io.to(to).emit("answer", { answer, from: socket.id });
    });

    socket.on("ice-candidate", ({ candidate, to }) => {
      io.to(to).emit("ice-candidate", { candidate });
    });

    socket.on("chat-message", ({ roomId, message }) => {
      io.to(roomId).emit("chat-message", message);
    });

    socket.on("file-share", ({ roomId, file }) => {
      io.to(roomId).emit("file-share", file);
    });

    socket.on("leave", () => {
      socket.leave(roomId);
      socket.to(roomId).emit("peer-left", socket.id);
    });
  });
};