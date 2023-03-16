import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  //fetch the data from api or backend
  const client = await MongoClient.connect(
    "mongodb+srv://ashaluckinstest1:karthika@cluster0.anyheqi.mongodb.net/meetups"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
        description: meetup.description,
      })),
    },
    // props: {
    //   meetups: DUMMY_meetups,
    // },
    revalidate: 1,
  };
}

export default HomePage;
