import React from 'react'
import { NavLink } from 'react-router-dom';
import { MyRoutes } from '../My Routes';
import styles from "./style.module.css"
export const Navigation = () => {
    return (
        <header>
            <div className='container mx-auto'>
                <div className='logo'>
                    <img src="./Logo.png" alt="" />
                </div>
                <nav>
            {MyRoutes.map(({ id, path, title }) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  key={id}
                  to={path}
                >
                  {title}
                </NavLink>
              );
            })}
          </nav>
            </div>

        </header>
    )
}
