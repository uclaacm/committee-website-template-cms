import moment from 'moment';

const getCssStringFromCommittee = (committee) => {
  switch (committee.toLowerCase().trim()) {
    case 'general':
    case 'impact': // we should change the branding here soon
    case 'external':
    case 'board':
      return 'board';
    case 'teachla' || 'teach la' || 'teach-la':
      return 'teachla';
    case 'ai':
    case 'cyber':
    case 'design':
    case 'hack':
    case 'icpc':
    case 'studio':
    case 'w':
    case 'cloud':
      return committee.toLowerCase();
    default:
      throw new Error(`Unrecognized string ${committee}`);
  }
};

const generateSingleEvent = ({
  // final keys
  id,
  title,
  start,
  end,
  committee,
  location,
  description,
  links,
  // non-final keys that need to be processed
  rawStart,
  rawEnd,
  date,
  fblink,
  banner,
}) => {
  let allDay = false;

  if (!start && !end) {
    if (!date) {
      throw new Error("Missing date; can't proceed");
    }
    // If rawStart or rawEnd is missing, set allDay to true
    if (!rawStart) {
      allDay = true;
      start = moment(`${date}`, 'YYYY-MM-DD LT').valueOf();
    } else {
      const startHr = rawStart.trim();
      start = moment(`${date} ${startHr}`, 'YYYY-MM-DD LT').valueOf();
    }

    if (!rawEnd) {
      allDay = true;
      end = moment(`${date}`, 'YYYY-MM-DD LT').valueOf();
    } else {
      const endHr = rawEnd.trim();
      end = moment(`${date} ${endHr}`, 'YYYY-MM-DD LT').valueOf();
    }
  }

  if (!links) {
    links = [];
  }
  if (location.includes('ucla.zoom.us')) {
    const zoomLink = location;
    location = 'Zoom';
    links.push({
      text: 'Zoom Link',
      href: zoomLink,
      ext: true,
    });
  }
  if (fblink) {
    links.push({
      text: 'Facebook Event',
      href: fblink,
      ext: true,
    });
  }

  if (!title) {
    throw new Error('Missing title');
  }

  if (!banner) {
    banner = '/favicon.svg';
  } else if (banner.includes('drive.google.com')) {
    const fileID = banner.match(/\/file\/d\/(.+?)\//)[1];
    banner = `https://drive.google.com/uc?export=download&id=${fileID}`;
  }

  return {
    id,
    title,
    allDay,
    start,
    end,
    location,
    committee,
    description,
    links,
    banner,
  };
};

const generateCommittee = ({
  // final keys
  committee,
  name,
  subtitle,
  description,
  logoLink,
  dcLink,
  igLink,
  email,
  favicon,
  backgroundImg,
}) => {
  if (!committee || !name) {
    throw new Error('Missing committee name');
  }

  if (!backgroundImg) {
    backgroundImg = '/acm-logo-wordmark-extended.png';
  } else if (backgroundImg.includes('drive.google.com')) {
    const fileID = backgroundImg.match(/\/file\/d\/([^/]+)\/?/)[1];
    backgroundImg = `https://drive.google.com/uc?export=download&id=${fileID}`;
  }

  if (!logoLink) {
    logoLink = '/acm-logo-wordmark-extended.png';
  } else if (logoLink.includes('drive.google.com')) {
    const fileID = logoLink.match(/\/file\/d\/(.+?)\//)[1];
    logoLink = `https://drive.google.com/uc?export=download&id=${fileID}`;
  }

  return {
    committee,
    name,
    subtitle,
    description,
    logoLink,
    dcLink,
    igLink,
    email,
    favicon,
    backgroundImg,
  };
};

const generateDateRange = (startDate, endDate) => {
  let currentDate = startDate;
  const dates = [];
  while (moment(currentDate).valueOf() < moment(endDate).valueOf()) {
    dates.push(currentDate);
    currentDate = moment(currentDate).add(7, 'days').format('YYYY-MM-DD');
  }
  return dates;
};

export {
  getCssStringFromCommittee,
  generateSingleEvent,
  generateDateRange,
  generateCommittee,
};
