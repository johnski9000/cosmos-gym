import ListItem from "./ListItem";
import styles from "./Header.module.css";
import Link from "next/link"
import React, { useState } from "react";

// If loading a variable font, you don't need to specify the font weight



function Menu() {
    const [open, setOpen] = useState(false);

  const listItems = [
    "Services",
    "Facility",
    "Merchandise"
  ];
  return (
    <div className={styles.MenuContainer}>
        <div className={styles.menuDesktop}>
            {listItems.map((item, index) => (
        <ListItem link={item} key={index}>
            {item}
        </ListItem>
      ))}
      <button className={styles.button15}><a>Join Now</a></button>
        </div>
      <div className={styles.menuMobile}>
      <button
          className={open === false ? "hamburger" : "hamburger is-active"}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default Menu;
