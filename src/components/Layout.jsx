import React, { memo } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = ({ tabs }) => {
  return (
    <>
      <header>
        {tabs && tabs.map(tab => (
          <Link key={tab.id} to={tab.id}>{tab.title}</Link>
        ))}
      </header>
      <Outlet />
    </>
  )
}

export default memo(Layout);