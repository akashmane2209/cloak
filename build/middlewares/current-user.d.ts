import { Request, Response, NextFunction } from 'express';
interface UserPayload {
    id: string;
}
declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
            session?: any;
        }
    }
}
export declare const user: (req: Request, res: Response, next: NextFunction) => void;
export {};
