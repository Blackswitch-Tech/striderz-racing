import React from 'react';
import { Chrono } from "react-chrono";

const TimelineComponent = () => {
  const items = [
    {
      title: "2012",
      cardTitle: "Inception",
      cardSubtitle: "First team registered, cleared virtuals but did not participate in the event.",
    },
    {
      title: "2014",
      cardTitle: "SAE Effi-cycle",
      cardSubtitle: "Successfully participated in the 2014 virtual round hosted at RIT Chennai on 28-29 June 2014.",
    },
    {
      title: "2016",
      cardTitle: "Car #113",
      cardDetailedText: [
        "First team from Saintgits to clear external technical evaluation and qualify for the main event.",
        "First team to clear Technical Inspection and virtuals to participate in the final race.",
      ],
    },
    {
      title: "2017",
      cardTitle: "Car #40",
      cardSubtitle: "Achieved significant weight reduction from 325kg to 239.5kg.",
    },
    {
      title: "2018",
      cardTitle: "Car #89",
      cardDetailedText: [
        "Completed 11 laps in the endurance race and recorded the fastest acceleration time (6.49 seconds) among Kerala teams.",
        "First time achieving a kerb weight below 200 kg.",
      ],
    },
    {
      title: "2019",
      cardTitle: "Car #83",
      cardDetailedText: [
        "SAE BAJA: Secured first prize in the SLED PULL event, marking the first podium finish for a Kerala team and received a cash prize of Rs 60,000.",
        "Overall first position in ATV Competition held in IHRD Adoor, where all BAJA teams from Kerala competed.",
      ],
    },
  ];

  return (
    <div className="w-full h-screen bg-blue-600 text-white">
      <h1 className="text-center text-3xl font-bold pt-8">Our Journey</h1>
      <p className="text-center px-4 pb-8">
        TEAM STRIDERZ Racing began its journey at Saintgits College of Engineering, born from the 
        Mechanical Engineering Department. Driven by a shared passion for racing and engineering, our 
        team was formed to push the limits of innovation and performance.
      </p>
      <div className="h-[calc(100vh-200px)]">
        <Chrono
          items={items}
          mode="VERTICAL"
          theme={{
            primary: 'white',
            secondary: '#2563eb', // Tailwind's blue-600
            cardBgColor: 'rgba(255, 255, 255, 0.1)',
            cardForeColor: 'white',
            titleColor: 'white',
          }}
          fontSizes={{
            cardTitle: '1.2rem',
            cardText: '1rem',
            cardSubtitle: '1rem',
            title: '1rem',
          }}
          classNames={{
            card: 'my-card',
            cardText: 'my-card-text',
            cardTitle: 'my-card-title',
            cardSubtitle: 'my-card-subtitle',
            title: 'my-title',
          }}
        />
      </div>
    </div>
  );
};

export default TimelineComponent;