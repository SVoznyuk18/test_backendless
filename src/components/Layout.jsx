import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";

import styles from './Layout.module.css'
const Layout = ({ tabs }) => {
  return (
    <>
      <header className={styles.header}>
        {tabs && tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={tab.id}
            className={({ isActive }) => isActive ? styles['active-link'] : styles.link} >
            {tab.title}
          </NavLink>
        ))}
      </header>
      <Outlet />
    </>
  )
}

export default memo(Layout);