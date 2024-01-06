
import { NavLink } from 'react-router-dom';
import { MyRoutes } from '../My Routes';
import styles from "./style.module.css"
import Freetrial from '../../Pages/Freetrial';
export const Navigation = () => {
  return (
    <header>
      <div className='container  mx-auto flex justify-between items-center py-8'>
        <div className='logo'>
          <img src="./Logo.png" alt="" />
        </div>
        <div className="hidden sm:block ">

          <div className='flex gap-5 items-center' >
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
            <Freetrial />

          </div>
        </div>
      </div>

    </header>
  )
}
