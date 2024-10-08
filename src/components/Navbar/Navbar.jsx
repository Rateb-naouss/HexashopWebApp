import Link from "next/link";
import {links} from "./data";
import styles from "./Navbar.module.css";
import Button from "@/elements/button/button";
import Logo from "@/elements/logo/Logo";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";


export default function Navbar() {
  return (
    <div className={styles.container}>
      <Logo /> 
        
      <div className={styles.links}>

        <DarkModeToggle />
        
        {links.map(link => <Link key={link.id} 
            href = {link.url} className={styles.link}> {link.title} </Link>)}

        <Button /> 
     </div>
    </div>
  );
}
