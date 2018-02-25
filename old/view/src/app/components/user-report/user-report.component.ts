import { Component, OnInit, ViewChild, AfterViewInit, Input, EventEmitter } from '@angular/core';
import { UserModalDialogComponent } from '../user-modal-dialog/user-modal-dialog.component';
import { User } from '../../models/user';
import { ReportService } from '../../services/report.service';
import { UserSession } from '../../services/userSession.service';
import { ReportSubscriberService } from '../../services/reportSubscriber.service';

@Component({
  selector: 'user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {
  @Input() projectId: string;
  @ViewChild("userReportModal") modalRef;
  private _user: User;
  private _report: string;
  private _reportObject: any;
  private _reportExist: boolean;
  
  rendered:EventEmitter<any>;
  constructor(private reportService: ReportService, reportSubscriber: ReportSubscriberService) {
    this._reportExist = false;
    this.rendered = new EventEmitter();

  }

  ngOnInit() {
    this._user = JSON.parse(UserSession.getUserFromStorage());
    this.reportService.getReport(this._user._id, this.projectId, this._user.username).subscribe(report => {
      this._reportObject = report.json();
      console.log(report.json());
      if (report.json()) {
        this._report = this._reportObject.data;
        this._reportExist = true;
      }
      this.rendered.emit(null);
    })
  }

  public initReport(userId: string, projectId: string) {
    this._user._id = userId;
    this.projectId = projectId;
    this.reportService.getReport(userId, projectId, this._user.username).subscribe(report => {
      this._reportObject = report.json();
      console.log(report.json());
      if (report.json()) {
        this._report = this._reportObject.data;
        this._reportExist = true;
      }
    })
  }

  public set userId(userId) {
    this._user._id = userId;
  }

  writeReport() {
    let reqObject = this.reportService.createReportObject(this._user._id, this.projectId, this._report, 'userReport', this._user.username, []);
    if (!this._reportExist)
      this.reportService.createReport(reqObject).subscribe();
    else {
      reqObject = Object.assign(reqObject, { reportId: this._reportObject._id });
      console.log(reqObject);
      this.reportService.updateReport(reqObject).subscribe();
    }

  }

}
