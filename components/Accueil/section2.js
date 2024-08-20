import React from 'react'
import { ContainerRepas } from '../cardNourriture/container'
import styles from '../../styles/section.module.css'

export const Section2 = () => {
  return (
    <section className={`${styles.containerSection}`}>
    <div className={`${styles.textContainer}`}>
      <h3 className={`${styles.primaryText}`}>consultez nos posts favoris</h3>
      <h2 className={`${styles.secondText}`}>nourritures traditionnelles, plats étranger et création de saison</h2>
      <p className={`${styles.primaryParagraph}`}>
        une collection de nos articles de blog les plus recents pour vous
        aider à consulter nos plats
      </p>
    </div>
      <ContainerRepas/>
  </section>
  )
}
