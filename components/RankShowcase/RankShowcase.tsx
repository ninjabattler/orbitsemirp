import React, { ComponentType, useState, Dispatch, SetStateAction } from 'react';
import { RankType } from '../../types';
import PaypalButton from '../PaypalButton/PaypalButton';
import styles from "./RankShowcase.module.scss";

export interface RankShowcaseProps {
  ranks: RankType[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selectedRank: RankType;
}

const RankShowcase: ComponentType<RankShowcaseProps> = ({ ranks, selected, setSelected, selectedRank }) => {

  return (
    <section id={styles.rankShowcase}>
      <header id={styles.rankHeader}>
        {
          ranks.map((rank, i) => {
            return (
              <button
                key={i}
                className={`${styles.rankButton} ${selected === i ? styles.selected : ''}`}
                onClick={() => { setSelected(i); }}
              >
                {rank.title}
              </button>
            )
          })
        }
      </header>

      <main id={styles.rankInfo}>
        <div id={styles.rankIcon}>
          <img src={selectedRank.icon} />
        </div>

        <div id={styles.rankContent}>
          <div id={styles.rankPaymenet}>
            <h2><b>{selectedRank.title}</b></h2>
            <h2
              className={styles.price}
              style={{ backgroundColor: selectedRank.colour }}
            >
              ${selectedRank.price}
            </h2>
            <PaypalButton cost={selectedRank.price} />
          </div>

          <p>{selectedRank.description}</p>
          <ul>
            {
              selectedRank.kit.map((item, i) => {
                return (
                  <li key={i}>{item}</li>
                )
              })
            }
          </ul>
        </div>
      </main>
    </section>
  )
}

export default RankShowcase