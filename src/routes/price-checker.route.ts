import { Request, Response, Router } from 'express';
import priceCheckerService from '../services/price-checker.service';

const router = Router();

router.use( '/v1/price-checker/:symbol', priceCheckerService.getPrice );

export default router;
