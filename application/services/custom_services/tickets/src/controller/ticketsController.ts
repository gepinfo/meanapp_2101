import { Request, Response } from 'express';
import { ticketsService } from '../service/ticketsService';
import { CustomLogger } from '../config/Logger'
let tickets = new ticketsService();

export class ticketsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tickets.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpDelete');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tickets.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tickets.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpCreate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tickets.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tickets.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tickets.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpSearchForUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tickets.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetNounById');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tickets.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetNounCreatedBy');
    })}


}