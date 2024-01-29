import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import { FormCard } from "./feature";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.leftSection}>
          {/* logo */}
          <Link href="/" className="">
            <Image
              src="/logo.svg"
              alt=""
              className={styles.logo}
              width={100}
              height={70}
            />
          </Link>
          {/* illustration */}

          <div className={styles.illustration}>
            <Image
              src="/31054d654669dbf388b2a9ec503f6495.png"
              alt=""
              className={styles.illustrationImage}
              width={300}
              height={300}
            />
          </div>
        </section>
        <section className={styles.rightSection}>
          {/* title */}

          <div className={styles.titleCard}>
            <h1>Welcome!</h1>
            <p className="">Enter details to login.</p>
          </div>

          {/* form */}

          <FormCard />
        </section>
      </div>
    </main>
  );
}
