"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/Home.module.css";
import Logo from "../../public/assets/GoatScriptsLogo.png";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Header({ setSearchQuery, onOpenGenerateModal }) {
  const { user, isLoaded } = useUser();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className={styles.header}>
      <section className={styles.logo}>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={150} />
        </Link>
      </section>
      <section className={styles.nav}>
        <section className={styles.nav_items}>
          <Link href="/generated" className={styles.link}>
            <p>GENERATED</p>
          </Link>
          <Link href="/liked" className={styles.link}>
            <p>LIKED</p>
          </Link>
          <p>PROFILE</p>
        </section>
        <section className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for image"
              className={styles.inputField}
              onChange={handleSearchChange}
            />
          </div>
        </section>

        <section>
          {isLoaded && user && (
            <div className={styles.user_button}>
              <button
                onClick={() => onOpenGenerateModal()}
                className={styles.generate_btn}
              >
                GENERATE
              </button>

              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </section>
      </section>
    </section>
  );
}
