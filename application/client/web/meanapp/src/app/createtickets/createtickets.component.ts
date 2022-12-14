import { Component, OnInit } from '@angular/core';
import { CreateticketsService } from './createtickets.service';

@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.scss'],
})

export class CreateticketsComponent implements OnInit {
    typesitemArray: any = [];
    severityitemArray: any = [];
    public tickets:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        callername: '',
        types: '',
        severity: '',
    }

    constructor (
        private createticketsService: CreateticketsService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
    }
    typesGpGetAllValues() {
        this.createticketsService.typesGpGetAllValues().subscribe((data:any) => {
            this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketsService.severityGpGetAllValues().subscribe((data:any) => {
            this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketsService.GpCreate(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.callername = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}