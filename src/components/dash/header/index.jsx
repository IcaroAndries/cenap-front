import React from 'react'
import sections from '../../../config/sections'

import style from './style.module.sass'

function DHeader() {
  return (
    <header className={style.header}>

        
        <nav className={style.nav}>
            <ul className={style.ul}>
                {
                    sections.map((val,index) =>{
                        return(
                            <li key={index}>
                                <a className={style.a} href={val.ref}>{val.title}</a>        
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
        
    </header>
  )
}

export default DHeader