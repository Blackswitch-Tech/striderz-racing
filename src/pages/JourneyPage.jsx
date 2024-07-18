import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export default function DefaultTimeline() {
  return (
    <div className="bg-[#0033CC] min-h-screen flex flex-col items-center justify-center pt-20 md:px-4">
      <div className="w-full md:px-0">
        <h1 className='flex items-center justify-center pb-6 text-white text-3xl font-bold'>Our Journey</h1>
        <Typography className='md:px-64 lg:px-64 pb-8 text-center'>
  TEAM STRIDERZ Racing began its journey at Saintgits College of Engineering, born from the Mechanical Engineering Department. Driven by a shared passion for racing and engineering, our team was formed to push the limits of innovation and performance.
</Typography>

        <Timeline className='md:px-64 lg:px-96   px-10 py-4'>
        
          <TimelineItem>
         
          <TimelineConnector className="bg-white !w-[3px]  !ml-1.5" />
          <TimelineHeader className="flex items-center h-3">
              <TimelineIcon className="bg-white text-white p-2 rounded-full"
              
               />
              <Typography variant="h6" color="blue-gray" className="leading-none pl-4">
                Inception
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
            <Typography variant="small" color="gray" className="font-thin white">
            First team registered, cleared virtuals but did not participate in the event.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <TimelineConnector className="bg-white !w-[3px] !ml-1.5" />
          <TimelineHeader className="flex items-center h-3">
              <TimelineIcon className=" text-white p-2 rounded-full bg-white" />
              <Typography variant="h6" color="blue-gray" className="leading-none pl-4">
                SAE Effi-cycle
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
            <Typography variant="small" color="gray" className="font-thin white ">
            Successfully participated in the 2014 virtual round hosted at RIT Chennai on 28-29 June 2014.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <TimelineConnector className="bg-white !w-[3px]  !ml-1.5" />
          <TimelineHeader className="flex items-center h-3">
          <TimelineIcon className=" text-white p-2 rounded-full bg-white" />
          <Typography variant="h6" color="blue-gray" className="leading-none pl-4">
                Car #113
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
            <Typography variant="small" color="gray" className="font-thin white">
            -First team from Saintgits to clear external technical evaluation and qualify for the main event.
            <Typography/>
            <Typography variant="small" color="gray" className="font-thin white"></Typography>
                -First team to clear Technical Inspection and virtuals to participate in the final race.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <TimelineConnector className="bg-white !w-[3px]  !ml-1.5" />
          <TimelineHeader className="flex items-center h-3">
          <TimelineIcon className=" text-white p-2 rounded-full bg-white" />
          <Typography variant="h6" color="blue-gray" className="leading-none pl-4">
                Car #40
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
            <Typography variant="small" color="gray" className="font-normal white">
            Achieved significant weight reduction from 325kg to 239.5kg.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <TimelineConnector className="bg-white !w-[3px]  !ml-1.5" />
          <TimelineHeader className="flex items-center h-3">
          <TimelineIcon className=" text-white p-2 rounded-full bg-white" />
          <Typography variant="h6" color="blue-gray" className="leading-none pl-4">
                Car #89
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-thin white">
                -Completed 11 laps in the endurance race and recorded the fastest acceleration time (6.49 seconds) among Kerala teams.
               
              </Typography>
              <Typography variant="small" color="gray" className="font-thin white">
              -First time achieving a kerb weight below 200 kg.
               
              </Typography>
              
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <TimelineConnector className="bg-white !w-[3px]  !ml-1.5" />
            <TimelineHeader className="flex items-center h-3">
            <TimelineIcon className=" text-white p-2 rounded-full bg-white" />
            <Typography variant="h6" color="blue-gray" className="leading-none pl-4">
                Car #83
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
            <Typography variant="small" color="gray" className="font-thin white">
            -SAE BAJA: Secured first prize in the SLED PULL event, marking the first podium finish for a Kerala team and received a cash prize of Rs 60,000.
               
              </Typography>
              <Typography variant="small" color="gray" className="font-thin white">
              -Overall first position in ATV Competition held in IHRD Adoor, where all BAJA teams from Kerala competed.              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
          <TimelineConnector className="bg-white !w-[3px]  !ml-1.5" />
          <TimelineHeader className="flex items-center h-3">
          <TimelineIcon className=" text-white p-2 rounded-full bg-white" />
          <Typography variant="h6" color="blue-gray" className="leading-none pl-4">
                Car #113
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
            <Typography variant="small" color="gray" className="font-thin white">
            -First team from Saintgits to clear external technical evaluation and qualify for the main event.
            <Typography/>
            <Typography variant="small" color="gray" className="font-normal white"></Typography>
                -First team to clear Technical Inspection and virtuals to participate in the final race.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <TimelineConnector className="bg-white !w-[3px]  !ml-1.5" />
          <TimelineHeader className="flex items-center h-3">
          <TimelineIcon className=" text-white p-2 rounded-full bg-white" />
          <Typography variant="h6" color="blue-gray" className="leading-none pl-4">
                Car #113
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
            <Typography variant="small" color="gray" className="font-thin white">
            -First team from Saintgits to clear external technical evaluation and qualify for the main event.
            <Typography/>
            <Typography variant="small" color="gray" className="font-normal white"></Typography>
                -First team to clear Technical Inspection and virtuals to participate in the final race.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          
        </Timeline>
      </div>
    </div>
  );
}
