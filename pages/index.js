import MeetupList from "../components/meetups/MeetupList";

const DUMMY_meetups = [
  {
    id: "m1",
    image:
      "https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg",
    title: "Meeting 1",
    description: "AA meeting",
  },
  {
    id: "m2",
    image:
      "https://www.a2gov.org/departments/Parks-Recreation/parks-places/PublishingImages/website%20editing%20sharepoint%20folders/Island/IslandBanner.jpg",
    title: "Meeting 2",
    description: "ADHD support group",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   ///fetch the data from some api after the authentication
//   return {
//     props: {
//       meetups: DUMMY_meetups,
//     },
//   };
// }
export async function getStaticProps() {
  //fetch the data from api or backend
  return {
    props: { meetups: DUMMY_meetups },
    revalidate: 10,
  };
}

export default HomePage;
