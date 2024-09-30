import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/dyjliblkefnfqei15g03.webp",
    address: "Some address 1, 67890 Some City",
    description: "This is a second meetup!",
  },
];
function HomePage(props) {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(props.meetups);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export async function getStaticProps() {
  // fetch data from API
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 1,
  };
}

export default HomePage;
