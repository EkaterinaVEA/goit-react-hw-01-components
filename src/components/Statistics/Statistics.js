import React from 'react';
//import PropTypes from 'prop-types';
// import statisticalData from '../../data/statistical-data.json';
import s from './statistics.module.css';
const Statistics = ({ stats }) => (
  <section className={s.statistics}>
    {/* {title && <h2 className={s.title}>{title}</h2>} */}

    <ul className={s.list}>
      {stats.map(({ id, label, percentage }) => (
        <li className={s.item} key={id}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

// Statistics.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };

export default Statistics;
