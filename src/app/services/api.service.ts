import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private developmentServicesData = [
        {
            iconClass: 'fas fa-bolt',
            title: 'Digital Transformation',
            body: 'We drive digital progress by leveraging cutting-edge technologies, revolutionizing businesses and fostering sustainable growth in the digital era.',
        },
        {
            iconClass: 'fas fa-laptop-code',
            title: 'App Development',
            body: 'We craft bespoke web and mobile apps, deliver innovative solutions, and enhance your digital presence for success.',
        },
        {
            iconClass: 'fas fa-gears',
            title: 'Product Engineering',
            body: 'We engineer exceptional digital products, combining design and data with an agile approach to meet evolving market demands.',
        },
    ];
    constructor() {}

    getDevelopmentServicesData() {
        return of(this.developmentServicesData);
    }
}
