import classes from "./MeetupDetail.module.css";
function MeetupDetailPage(props) {
  return (
    <>
      <section className={classes.detail}>
        <img src={props.img} />
        <h2>{props.title}</h2>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </>
  );
}
export default MeetupDetailPage;
