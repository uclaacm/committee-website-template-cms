import React, {useState} from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Events.module.scss';
import getAllEvents from '../scripts/event-generator-sheets.mjs';

// import moment from 'moment';

// const localizer = momentLocalizer(moment);

// // see eventPropGetter
// const getEventClassByEvent = (event) => {
// 	let modifierStr = '';
// 	if (event.committee) {
// 		modifierStr = `rbc-override-${event.committee}`;
// 	}
// 	return ({
// 		className: `rbc-override-event ${modifierStr}`,
// 	});
// };

export default function Events({events}: {events: Array<Array>}) {
  const [activeEvent, setActiveEvent] = useState(null);
	const [indexedEvents, setIndexedEvents] = useState(events.map(({event, index}) => ({...event, id: index})));
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
          <div className={styles.card}>Placeholder card</div>
          <div className={styles.card}>Placeholder card</div>
          <div className={styles.card}>Placeholder card</div>
        </div>
        <div>
          <h2 className={styles.subtitle}>Past Events</h2>
          <div className={styles.card}>Placeholder card</div>
          <div className={styles.card}>Placeholder card</div>
          <div className={styles.card}>Placeholder card</div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
	const events = await getAllEvents();
	// Attempt to replace new lines with <br/>, doesnt work
	// const processedEvents = events.map((event) => (
	// 	{...event, description: <>{event.description.replace(/\n/g, '<br/>')}</>}));
	// console.log(processedEvents);

	return {
		props: {
			events: events,
		},

		revalidate: 3600,
	};
};
