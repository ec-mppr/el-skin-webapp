import styles from 'app/not-found.module.css'

function NotFound() {
  return (
    <>
      <div className={styles.containerNotFound}>
        <div className={styles.titleNotFound}>
          <p>Página não encontrada</p>
        </div>
      </div>
    </>
  );
}

export default NotFound;