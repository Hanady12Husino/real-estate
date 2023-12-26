import express from 'express';
import {
  deleteUser,
  getUser,
  getUserListings,
  test,
  updateUser,
  getUsers,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUserListings);
router.get('/:id', verifyToken, getUser);
router.get('/get/:id', getUsers);
export default router;
