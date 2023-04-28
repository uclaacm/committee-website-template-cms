import React from 'react';
import EventCard from '../components/EventCard';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Events.module.scss';
// import getAllEvents from '../scripts/event-generator-sheets.mjs';

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

export default function Events() {
  // export default function Events({events}: {events: Array<Array>}) {
  // const [activeEvent, setActiveEvent] = useState(null);
  // const [indexedEvents, setIndexedEvents] = useState(events.map(({event, index}) => ({...event, id: index})));
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
          <div className={styles.card}>
            <EventCard
              header="Header"
              body="She exposed painted fifteen are noisier mistake led waiting. Surprise not wandered speedily husbands although yet end. Are court tiled cease young built fat one man taken. We highest ye friends is exposed equally in. Ignorant had too strictly followed. Astonished as travelling assistance or unreserved oh pianoforte ye. Five with seen put need tore add neat. Bringing it is he returned received raptures."
              time="time"
            />
          </div>
          <div className={styles.card}>
            <EventCard
              header="Header"
              body="It sportsman earnestly ye preserved an on. Moment led family sooner cannot her window pulled any. Or raillery if improved landlord to speaking hastened differed he. Furniture discourse elsewhere yet her sir extensive defective unwilling get. Why resolution one motionless you him thoroughly. Noise is round to in it quick timed doors. Written address greatly get attacks inhabit pursuit our but. Lasted hunted enough an up seeing in lively letter. Had judgment out opinions property the supplied."
              time="time"
            />
          </div>
          <div className={styles.card}>
            <EventCard
              header="Header"
              body="Same an quit most an. Admitting an mr disposing sportsmen. Tried on cause no spoil arise plate. Longer ladies valley get esteem use led six. Middletons resolution advantages expression themselves partiality so me at. West none hope if sing oh sent tell is."
              time="time"
            />
          </div>
        </div>
        <div>
          <h2 className={styles.subtitle}>Past Events</h2>
          <div className={styles.card}>
            <EventCard
              header="Header"
              body="Same an quit most an. Admitting an mr disposing sportsmen. Tried on cause no spoil arise plate. Longer ladies valley get esteem use led six. Middletons resolution advantages expression themselves partiality so me at. West none hope if sing oh sent tell is."
              time="time"
            />
          </div>
          <div className={styles.card}>
            <EventCard
              header="Header"
              body="It sportsman earnestly ye preserved an on. Moment led family sooner cannot her window pulled any. Or raillery if improved landlord to speaking hastened differed he. Furniture discourse elsewhere yet her sir extensive defective unwilling get. Why resolution one motionless you him thoroughly. Noise is round to in it quick timed doors. Written address greatly get attacks inhabit pursuit our but. Lasted hunted enough an up seeing in lively letter. Had judgment out opinions property the supplied."
              time="time"
            />
          </div>
          <div className={styles.card}>
            <EventCard
              header="Header"
              body="She exposed painted fifteen are noisier mistake led waiting. Surprise not wandered speedily husbands although yet end. Are court tiled cease young built fat one man taken. We highest ye friends is exposed equally in. Ignorant had too strictly followed. Astonished as travelling assistance or unreserved oh pianoforte ye. Five with seen put need tore add neat. Bringing it is he returned received raptures."
              time="time"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

// export const getStaticProps = async () => {
// 	const events = await getAllEvents();
// 	// Attempt to replace new lines with <br/>, doesnt work
// 	// const processedEvents = events.map((event) => (
// 	// 	{...event, description: <>{event.description.replace(/\n/g, '<br/>')}</>}));
// 	// console.log(processedEvents);

// 	return {
// 		props: {
// 			events: events,
// 		},

// 		revalidate: 3600,
// 	};
// };
