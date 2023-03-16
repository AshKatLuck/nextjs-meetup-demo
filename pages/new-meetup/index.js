import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();
  async function addNewMeetUphandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>Add new React Meetup</title>
        <meta
          name="description"
          content="Add a new react meetup yourself in your neighbourhood"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addNewMeetUphandler} />
    </>
  );
}

export default NewMeetupPage;
