import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addNewMeetUphandler() {
    console.log("inside addMettuphandler function");
  }
  return <NewMeetupForm onAddMeetup={addNewMeetUphandler} />;
}

export default NewMeetupForm;
