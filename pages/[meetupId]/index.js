import MeetupDetailPage from "../../components/meetups/MeetupDetail";

function MeetupDetail() {
  return (
    <MeetupDetailPage
      img="https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg"
      title="Meeting 1"
      address="1102 MaidenLane Ct 106, Ann Arbor, MI, 48105"
      description="AA meeting"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        img: "https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg",
        id: meetupId,
        title: "Meeting 1",
        address: "1102 MaidenLane Ct 106, Ann Arbor, MI, 48105",
        description: "AA meeting",
      },
    },
  };
}

export default MeetupDetail;
