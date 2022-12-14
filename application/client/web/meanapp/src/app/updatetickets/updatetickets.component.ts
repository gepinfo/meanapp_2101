import { Component, OnInit } from '@angular/core';
import { UpdateticketsService } from './updatetickets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatetickets',
  templateUrl: './updatetickets.component.html',
  styleUrls: ['./updatetickets.component.scss'],
})

export class UpdateticketsComponent implements OnInit {
    queryId: any;
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
        private updateticketsService: UpdateticketsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params['id'];
 	 	this.GpGetNounById();
 	 	});
    }
    typesGpGetAllValues() {
        this.updateticketsService.typesGpGetAllValues().subscribe((data:any) => {
            this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.updateticketsService.severityGpGetAllValues().subscribe((data:any) => {
            this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updateticketsService.GpUpdate(this.tickets).subscribe((data:any) => {
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
    GpGetNounById() {
        this.updateticketsService.GpGetNounById(this.queryId).subscribe((data:any) => {
            this.tickets = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}