import { Router } from 'express';
import { userRoutes } from '../modules/user/user.routes';
import { authRoutes } from '../modules/auth/auth.routes';
import { RoomRoutes } from '../modules/room/room.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/room',
    route: RoomRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
