import { Server } from "socket.io";
import { signalingHandler } from "./signaling";
import http from "http";

export const initSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    signalingHandler(io, socket);
  });
};