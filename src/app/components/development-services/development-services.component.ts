import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-development-services',
    templateUrl: './development-services.component.html',
    styleUrls: ['./development-services.component.scss'],
})
export class DevelopmentServicesComponent implements OnInit {
    data$: Observable<
        Array<{ title: string; body: string; iconClass: string }>
    >;
    constructor(private api: ApiService) {
        this.data$ = null as any;
    }

    ngOnInit(): void {
        this.data$ = this.api.getDevelopmentServicesData();
    }
}
