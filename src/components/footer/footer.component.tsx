import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

import ENAMDLOGO from "@/assets/logo/enamad-svgrepo-com.svg";
import SALAMATLOGO from "@/assets/logo/bimehsalamat-svgrepo-com.svg";
import RAYANEHLOGO from "@/assets/logo/rayane-senf.svg";
import SAMANDEHILOGO from "@/assets/logo/samandehi-svgrepo-com.svg";
import MainLogo from "@/assets/logo/MainLogo.png";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteSocialXFill from "@/icons/MingcuteSocialXFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";

import styles from "./footer.module.css";
import MingcuteInsFill from "@/icons/MingcuteInsFill";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>
          <Image src={MainLogo} alt="main logo" width={40} />
          DocBook
        </div>
        <p className={styles.description}>
          تجربه راحت جستجو، مشاوره و دریافت نوبت از پزشکان سراسر ایران
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href={"#"}>
              <Image src={ENAMDLOGO} alt="ENAMDLOGO logo" width={30} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image src={SALAMATLOGO} alt="SALAMATLOGO logo" width={30} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image src={SAMANDEHILOGO} alt="SAMANDEHILOGO logo" width={30} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image src={RAYANEHLOGO} alt="RAYANEHLOGO logo" width={40} />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href={"#"} target="_blank">
              <MingcuteLinkedinFill fill="#00AAFF" />
            </Link>
          </li>
          <li>
            <Link href={"#"} target="_blank">
              <MingcuteSocialXFill />
            </Link>
          </li>
          <li>
            <Link href={"#"} target="_blank">
              <MingcuteYoutubeFill />
            </Link>
          </li>
          <li>
            <Link href={"#"} target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link href={"#"} target="_blank">
              <MingcuteInsFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمام حقوق مادی و معنوی این وبسایت متعلق به پزشکان محترم می باشد.
      </p>
    </footer>
  );
}