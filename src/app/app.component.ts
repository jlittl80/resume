import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCard } from './components/info-card/InfoCard';
import { slideUpDown } from 'src/app/animations/slideUpDown';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('slideUpDown', slideUpDown()),
  ],
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  projects: Array<Object> = [
    {
      title: "PKMN TCG Vault",
      year: "2019",
      link: "https://pkmntcgvault.com/",
      show: false,
      short: `Project myself and a friend started 2 years ago. We started using PHP,
      however we decided to change to Angular 7 + Nebular. (If it isnt up, its
      because we havent released yet. Let me know if thats the case and Ill start it for a day)`,
    },
    {
      title: "This Resume",
      year: "2019",
      link: "https://github.com/jlittl80/resume",
      show: false,
      short: `This is what you're looking at.`,
    },
    {
      title: "PKMN TCG Vault (Except with PHP)",
      year: "2017",
      link: "#",
      show: false,
      short: `The original PKMN TCV Vault me and my friend started in 2017, has
      since been replaced with the aforementioned Angular 7 + Nebular. It also
      was the first time using GIT.`,
    },
    {
      title: "GamestorePOS",
      year: "2013",
      link: "https://github.com/jlittl80/GamestorePOS",
      show: false,
      short: `Made using PHP + jQuery, this was an assignment for grade 12 ICT
      (Information and Computer Technologies)`,
    },
    {
      title: "NuroIM",
      year: "2013",
      link: "https://github.com/jlittl80/NuroIM",
      show: false,
      short: `Made using PHP + jQuery, another silly project with a friend about
      a chat application i had made in VB.NET during ICT.`,
    },
    {
      title: "Affordable Car Mods",
      year: "2013",
      link: "https://github.com/jlittl80/AffCarMods",
      show: false,
      short: `More PHP + jQuery, this is a side project me and my friend
      decided to do during high school.`,
    },
    {
      title: "My First Website",
      year: "2012",
      link: "https://github.com/jlittl80/FirstWebsite",
      show: false,
      short: `Created during my Cert. 4, my first ever website.`,
    },
  ];

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
      with relevant departments. Includes dealing with paperwork, department
      managers, suppliers, discrepancies related to orders, and returns to
      warehouses/vendors. Furthermore this involved dealing with managerial jobs
      such as generator and safety checks, having extensive knowledge in operating
      the alarm system, assisting tradesmen with access to relevant electrical/plant
      room locations, and extensive knowledge in the in-store IT systems.`,
    },
    {
      title: "Longlife Team Member",
      date: "25th Jan 2016 - 14th May 2018",
      place: "Woolworths",
      short: `Primarily working as a team to maintain a high level presentation
      of the department. Additional duties involved inventory management, including
      ordering stock, investigating discrepancies, assisting other staff and
      departments with issues relating to inventory.`,
    },
    {
      title: "Deli Team Member",
      date: "18th Nov 2012 - 25th Jan 2016",
      place: "Woolworths",
      short: `Organising a fresh food department as part of a team, including
      cleaning, customer service, food safety, maintaining a high standard including
      presentation of the department, working through unforeseen circumstances.`,
    },
    {
      title: "Trainee",
      date: "23rd Feb 2012 - 5th Nov 2012",
      place: "Intouch Consultancy",
      short: `Traineeship run in conjunction with  Certificate 4 in IT and Multimedia.`,
    },
  ];

  educations: Array<InfoCard> = [
    {
      title: "Cert. 4 IT & Multimedia",
      date: "Feb 2012 - Feb 2013",
      place: "Prime Learning",
      short: `ICA40805 – Completed part-time during high school. Achievements
      include making and publishing a game on the App Store and building
      a basic static website.`,
    },
    {
      title: "Queensland Certificate of Education",
      date: "Jan 2009 - Dec 2013",
      place: "Pacific Pines State High School",
      short: `Successful completion of secondary education.`,
    },
  ];
}
