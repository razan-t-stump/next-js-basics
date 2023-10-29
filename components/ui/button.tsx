import Link from 'next/link';
import styles from './button.module.sass';

function Button(props: any) {
  return (
    <Link className={styles.btn} href={props.link}>
      {props.children}
    </Link>
  );
}

export default Button;
