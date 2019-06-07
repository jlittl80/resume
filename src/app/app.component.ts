import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCard } from './components/info-card/InfoCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  skills: Array<String> = [
    "Node.js - 6 Months",
    "Angular 7/8 - 6 Months",
    "Nebular - 6 Months",
    "Typescript - 6 Months",
    "SCSS - 6 Months",
    "PHP 5/7 - 2-4 Years",
    "jQuery - 3 Years",
    "SQL - 4 Years",
    "Google Cloud Platform - 2 Years",
    "Linux - 3 Years",
    "C# - 6 Months",
    "Visual Basic - 1 Year",
    "Googling - 10 Years",
  ];

  todos: Array<string> = [
    "Learn more about Mongo",
    "Continue developing skills related to Angular",
    "Learn the basics of React",
    "Continue work on personal projects",
  ]

  works: Array<InfoCard> = [
    {
      title: "Head Reserve Stockhand",
      date: "14th May 2018 - Present",
      place: "Woolworths",
      short: `Dealt with receiving, processing, and distributing deliveries
      with relevant departments. Includes dealing with paperwork, other
      managers, suppliers, discrepancies related to orders coming in
      wrong/never coming in, and returns to warehouses/vendors.
      Also dealt with managerial jobs such as generator and safety
      checks, extensive knowledge in operating our alarm system,
      assisting tradesmen with access to relevant electrical/plant
      room locations, and extensive knowledge in our in-store IT systems.`,
    },
    {
      title: "Longlife Team Member",
      date: "25th Jan 2016 - 14th May 2018",
      place: "Woolworths",
      short: `Included the same expectations as the Deli, except less focus
      on cleaning and food safety and more involvement with inventory
      management, including ordering stock, investigating discrepancies,
      assisting other staff and departments with issues relating to inventory.`,
    },
    {
      title: "Deli Team Member",
      date: "18th Nov 2012 - 25th Jan 2016",
      place: "Woolworths",
      short: `Organising a fresh food department as part of a team, including
      cleaning, customer service, food safety, maintaining a high standard
      including presentation of the department, working through unforeseen circumstances.`,
    },
    {
      title: "Trainee",
      date: "23rd Feb 2012 - 5th Nov 2012",
      place: "Intouch Consultancy",
      short: `This was a paid traineeship, run in conjunction with my Certificate
      4 in IT and Multimedia.`,
    },
  ];

  educations: Array<InfoCards> = [
    {
      title: "Cert. 4 IT & Multimedia",
      date: "Feb 2012 - Feb 2013",
      place: "Prime Learning",
      short: `ICA40805 – Completed part-time during high school. Achievements
      incl. making and publishing a game on the App Store and building
      an extremely basic static website.`,
    },
    {
      title: "Grade 12 GCE",
      date: "Jan 2009 - Dec 2013",
      place: "Pacific Pines State High School",
      short: `Passed Grade 12`,
    },
  ];
}
