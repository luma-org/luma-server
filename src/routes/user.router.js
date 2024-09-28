
import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const router = Router();
router.post('/', userController.create);
router.post('/otp/send', userController.sendOtp);
router.post('/otp/verify', userController.verifyOtp);
router.put('/password/reset', userController.resetPassword);
router.get('/admin/:id', userController.getByIdAdmin);
router.get('/:id', userController.getById);

export default router;