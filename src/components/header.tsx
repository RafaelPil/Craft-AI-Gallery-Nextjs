"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/Home.module.css";
import Logo from "../../public/assets/blurLogo.png";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const { user, isLoaded } = useUser();

  return (
    <section className={styles.header}>
      <section className={styles.logo}>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={70} height={50} />
        </Link>
      </section>
      <section className={styles.nav}>
        <section className={styles.nav_items}>
          <Link href="/my" className={styles.link}>
            <p>GENERATED</p>
          </Link>
        </section>
        <section className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for image"
              className={styles.inputField}
            />
          </div>
        </section>

        <section>
          {isLoaded && user && (
            <div className={styles.user_button}>
              <Link href="/createImage" className="mr-4">
                <button className={styles.generate_btn}>GENERATE</button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </section>
      </section>
    </section>
  );
}
