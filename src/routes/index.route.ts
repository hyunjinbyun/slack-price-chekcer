import { Request, Response, Router } from 'express';
import priceCheckerRoute from './price-checker.route';
import temperatureRoute from './temperature-checker.route';

const router = Router();

// health check end point
router.use( '/actuator/health', ( req:Request, res:Response ) => res.json({ resultCode: 0, resultMessage: 'OK' }) );
router.use( priceCheckerRoute );
router.use( temperatureRoute );

export default router;
