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
            body: 'We design unique web and mobile apps, bring innovative solutions, and boost your online presence for success.',
        },
        {
            iconClass: 'fas fa-gears',
            title: 'Product Engineering',
            body: 'We create outstanding digital products by blending design and data within an agile framework to address ever-changing market needs.',
        },
        {
            iconClass: 'fas fa-chart-line',
            title: "Data Science",
            body: "We specialize in providing data science project services for intricate analytical endeavors. Our experts are here to help you unlock the power of your data."
        },
        {
            iconClass: "fas fa-swatchbook",
            title: "UI/UX",
            body: "Designing seamless digital experiences, where form meets function, with a focus on user-centered innovation."
        },
        {
            iconClass: "fas fa-brain",
            title: "Artificial Intelligence",
            body: "Pioneering advancements through cutting-edge Artificial Intelligence solutions."
        },
        {
            iconClass: "fas fa-layer-group",
            title: "Big Data & Analytics",
            body: "Unveiling insights and driving decisions through advanced Big Data & Analytics strategies."
        },
        {
            iconClass: "fas fa-timeline",
            title: "DevOps",
            body: "Enabling continuous innovation and efficiency through DevOps excellence."
        },
        {
            iconClass: "fas fa-cloud",
            title: "Cloud Services",
            body: "Unleashing the potential of scalable Cloud Services for your digital transformation."
        },

    ];
    constructor() {}

    getDevelopmentServicesData() {
        return of(this.developmentServicesData);
    }
}
