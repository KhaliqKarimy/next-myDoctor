import { ReactElement } from "react";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import Image from "next/image";
import MainLogo from "@/assets/logo/MainLogo.png";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1 className={styles.logo}>
        <Image src={MainLogo} alt="main logo" width={50} />
        DocBook
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجو ها</div>
        <ul>
          <li>ارولوژیست</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}