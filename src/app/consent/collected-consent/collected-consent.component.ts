import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsentService } from '../consent.service';
import { Consent } from '../consent.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-collected-consent',
  templateUrl: './collected-consent.component.html',
  styleUrls: ['./collected-consent.component.scss']
})
export class CollectedConsentComponent implements OnInit {

  collectedConsents: Consent[] = [];
  displayedColumns: string[] = ['name', 'email', 'consents'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private consentService: ConsentService) { }

  ngOnInit() {
    this.getCollectedConsents();
  }

  getCollectedConsents() {
    this.consentService.getConsents()
    .subscribe(
      (response: any) => {
        this.setDataTableSources(response);
      },
      (error) => {console.log(error); }
    );
  }

  setDataTableSources(response) {
      this.collectedConsents = response.consents;
      this.dataSource = new MatTableDataSource<Consent>(this.collectedConsents);
      this.dataSource.paginator = this.paginator;
  }

}
