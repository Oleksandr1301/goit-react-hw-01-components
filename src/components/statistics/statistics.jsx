// import data from './data.json';
import css from './statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(data => {
          return (
            <li
              className={css.item}
              key={data.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{data.label}</span>
              <span className={css.percentage}>{data.percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
