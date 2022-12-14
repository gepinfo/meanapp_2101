import { Component, OnInit } from '@angular/core';
import { SearchupdateticketsService } from './searchupdatetickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchupdatetickets',
  templateUrl: './searchupdatetickets.component.html',
  styleUrls: ['./searchupdatetickets.component.scss'],
})

export class SearchupdateticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Callername', field: 'callername'  },{ headerName: 'Types', field: 'types'  },{ headerName: 'Severity', field: 'severity'  },];
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private searchupdateticketsService: SearchupdateticketsService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
    }
    typesGpGetAllValues() {
        this.searchupdateticketsService.typesGpGetAllValues().subscribe((data:any) => {
            this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.searchupdateticketsService.severityGpGetAllValues().subscribe((data:any) => {
            this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.searchupdateticketsService.GpSearch(this.tickets).subscribe((data:any) => {
            this.rowData = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./updatetickets'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params:any:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}