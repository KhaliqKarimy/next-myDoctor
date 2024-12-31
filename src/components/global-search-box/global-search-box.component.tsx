import { ReactElement } from "react";

import MingcuteSearch2Fill from "@/icons/MingcuteSearch2Fill";
import MingcuteLocation2Line from "@/icons/MingcuteLocation2Line";

import styles from "./globalSearchBox.module.css";

export default function GlobalSearchBoxComponent(): ReactElement {
  return (
    <div className={styles.globalSearchBox}>
      <div className={styles.searchIcon}>
        <MingcuteSearch2Fill />
      </div>
      <input type="text" placeholder="نام بیماری، پزشک، تخصص و..." />

      <div className={styles.divider}></div>
      <div className={styles.location}>
        <button>
          <MingcuteLocation2Line />
          همه شهرها
        </button>
      </div>
    </div>
  );
}