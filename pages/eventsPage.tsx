import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import MainLayout from '../components/MainLayout';
import getAllEvents from '../scripts/event-generator-sheets.mjs';
import styles from '../styles/Events.module.scss';

interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  start: string;
  end: string;
  committee: string;
  event_type: string;
  registration_link: string;
  max_capacity: number;
  banner: string;
}

// interface EventClass {
//   className?: string;
// }

// const getEventClassByEvent = (event: Event): EventClass => {
//   if (!event) {
//     return {};
//   }
//   let modifierStr = '';
//   if (event.committee) {
//     modifierStr = `rbc-override-${event.committee}`;
//   }
//   return ({
//     className: `rbc-override-event ${modifierStr}`,
//   });
// };

interface Props {
  events: Event[];
}

export default function Events({ events }: Props): JSX.Element {
  // const [activeEvent, setActiveEvent] = useState<Event | null>(null);
  const [indexedEvents] = useState<Event[]>( // wasn't using setindexedEvents so was getting linting errors </3
    events.map((event, index) => ({ ...event, id: index })),
  );

  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.title}>Events</h1>
        <p className={styles.description}>
          Event descriptions Event descriptionsEvent descriptionsEvent
          descriptionsEvent descriptionsEvent descriptions Event
          descriptionsEvent descriptionsEvent descriptions
        </p>
        <div>
          <h2 className={styles.subtitle}>Upcoming Events</h2>
          {indexedEvents.slice(1).map((event, index) => {
            const start = new Date(event.start);
            const end = new Date(event.end);
            const startDate = start.toDateString();
            const endDate = end.toDateString();
            const startTime = start.toLocaleTimeString();
            const endTime = end.toLocaleTimeString();
            let time = `${startTime.slice(0, 4) + startTime.slice(8)} - ${
              endTime.slice(0, 4) + endTime.slice(8)
            }`;
            {
              startDate === endDate
                ? (time = `${startDate} ` + time)
                : (time = `${startDate} - ${endDate} ` + time);
            }
            // start = start.toString().split(/\s+/).slice(0, 5).join(' ')

            return (
              <div key={index} className={styles.card}>
                <EventCard
                  header={event.title}
                  body={event.description}
                  time={time}
                  img={event.banner}
                />
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();
  // Attempt to replace new lines with <br/>, doesn't work
  // const processedEvents = events.map((event) => (
  //  {...event, description: <>{event.description.replace(/\n/g, '<br/>')}</>}));
  // console.log(processedEvents);
  for (const event of events) {
    event.banner = await event.banner;
  }

  return {
    props: {
      events: events,
    },
    revalidate: 3600,
  };
};
