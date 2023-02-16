import express from 'express';
import { createImage } from '../controllers/dalle';

const router = express.Router();

router.route('/').get((req, res) => {
    res.send('Hello from Dall-e')
});

router.post('/', createImage)

export default router;