import classes from './event-content.module.sass';

function EventContent(props: any) {
  return (
    <section className={classes.content}>{props.children}</section>
  );
}

export default EventContent;
