import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger } from '@angular/animations';
import { ThemeService } from 'src/app/components/theme-switcher/theme.service';
import { InfoCard } from 'src/app/components/info-card/InfoCard';
import { slideUpDown } from 'src/app/animations/slideUpDown';
import { DateRangePipe } from 'src/app/pipes/date-range.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('slideUpDown', slideUpDown()),
  ],
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  currentTheme: string;

  constructor(private themeService: ThemeService) {
    this.themeService.getActiveTheme().subscribe((currTheme: string) => this.currentTheme = currTheme);
  }

  toggleTheme() {
    this.themeService.setActiveTheme((this.currentTheme == "lightTheme" ? "darkTheme": "lightTheme"));
  }

  projects: Array<Object> = [
    {
      title: "AWS Internal Work",
      year: "2021",
      link: "#",
      show: false,
      short: `Programming and scripting work on internal AWS tools to increase
      the productivity and availability of information to technicians, to reach
      more informed decisions faster, and to improve processes tech’s follow`,
    },
    {
      title: "Docker Speedtest",
      year: "2020",
      link: "https://github.com/jlittl80/docker-speedtest",
      show: false,
      short: `A Node server + Python script designed to run on a Raspberry Pi that
      runs an internet speedtest and logs the results, which can be accessed over the network
      in a viewable format. Forked from the original, I made security updates, QOL and mobile changes
      to greatly improve useability, and I now run this 24/7`,
    },
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
      title: "PKMN TCG Vault (PHP)",
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

  skills: Array<Object> = [
    {
      name: "HTML/CSS/JS",
      dateRange: {
        start: "1/8/2012",
        end: 0,
      },
    },
    {
      name: "SCSS",
      dateRange: {
        start: "1/1/2019",
        end: 0,
      },
    },
    {
      name: "jQuery",
      dateRange: {
        start: "6/1/2012",
        end: "1/1/2017",
      },
    },
    {
      name: "Typescript",
      dateRange: {
        start: "1/1/2019",
        end: 0,
      },
    },
    {
      name: "Angular 7/8",
      dateRange: {
        start: "1/1/2019",
        end: 0,
      },
    },
    {
      name: "Nebular",
      dateRange: {
        start: "1/1/2019",
        end: 0,
      },
    },
    {
      name: "PHP 5/7",
      dateRange: {
        start: "6/1/2012",
        end: "1/1/2017",
      },
    },
    {
      name: "MySQL",
      dateRange: {
        start: "6/1/2012",
        end: "1/1/2017",
      },
    },
    {
      name: "Google Cloud Platform",
      dateRange: {
        start: "1/1/2016",
        end: 0,
      },
    },
    {
      name: "Stripe",
      dateRange: {
        start: "1/6/17",
        end: "1/6/18",
      },
    },
    {
      name: "Linux",
      dateRange: {
        start: "1/1/2016",
        end: "7/1/2017",
      },
    },
    {
      name: "C#",
      dateRange: {
        start: "1/1/2012",
        end: "7/1/2012",
      },
    },
    {
      name: "Visual Basic",
      dateRange: {
        start: "1/1/2011",
        end: "1/1/2012",
      },
    },
    {
      name: "Googling",
      dateRange: {
        start: "1/1/2010",
        end: 0,
      },
    },
  ];

  todos: Array<string> = [
    "Learn more about Mongo",
    "Learn the basics of React",
    "Continue work on personal projects",
  ]

  works: Array<InfoCard> = [
    {
      title: "Data Centre Technician",
      date: "3rd Aug 2020 - Present",
      place: "Amazon Web Services",
      short: `Dealing with the day-to-day responsibilities of a Data Centre Tech.
      including break-fix work on server and network systems, taking on/creating
      projects outside the scope of normal repair work to fix/improve equipment or
      processes, and doing weekly/monthly checks on instruments and equipment to
      verify everything is in order, and to remediate any issues. Co-ordinating
      with other teams locally and internationally to resolve different issues,
      or complete much larger projects that can have global impacts. Training/sharing
      information with co-workers/globally to better improve other technicians,
      or find flaws in the ways we are currently doing things.`,
    },
    {
      title: "Warehouse Assistant",
      date: "28th Oct 2019 - 13th July 2020",
      place: "Village Roadshow Theme Parks",
      short: `Dealing with receiving, processing, and distributing deliveries
      throughout the VRTP family of theme parks. Performing quality assurance
      and reporting for high risk items, and performing daily and weekly checks
      on equipment.`,
    },
    {
      title: "Head Reserve Stockhand",
      date: "14th May 2018 - 30th Sept 2019",
      place: "Woolworths",
      short: `Dealt with receiving, processing, and distributing deliveries
      with relevant departments. Includes dealing with paperwork, department
      managers, suppliers, discrepancies related to orders, and returns to
      warehouses/vendors. Furthermore, this involved dealing with managerial jobs
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
