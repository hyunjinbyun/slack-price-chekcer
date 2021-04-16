import { Request, Response, Router } from 'express';
import temperatureServie from '../services/temperature-checker.service';

const router = Router();

router.get( '/v1/temperature/han-river', temperatureServie.getTemperature );

export default router;
