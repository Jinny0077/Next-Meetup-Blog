import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    // <MeetupDetail />
    // <>
    //   <img src="https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/dyjliblkefnfqei15g03.webp" alt="first meet up" />
    //   <h1>A First Meetup</h1>
    //   <address>Some address</address>
    //   <p>The meetup description</p>
    // </>
    <div>test</div>
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
  };
}
export async function getStaticProps(context) {
  // fetch data for a signle meetup
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: "https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/dyjliblkefnfqei15g03.webp",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
    revalidate: 1,
  };
}
export default MeetupDetails;
