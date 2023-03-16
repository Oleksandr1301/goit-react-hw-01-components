import data from './data.json';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = () => {
  return (
    <section className="statistics">
      {data.title && <h2 className={data.title}>{data.title}</h2>}

      <ul className="stat-list">
        {data.map((data) => {
          return (
            <li
              className={data.item}
              key={data.id}
              style={{ backgroundColor: getRandomHexColor()}}
            >
              <span className={data.label}>{data.label}</span>
              <span className={data.percentage}>{data.percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
