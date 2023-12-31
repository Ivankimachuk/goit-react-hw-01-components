import PropTypes from "prop-types";
import style from "./Statistics.module.css"
import generateColor from "./generateColor";

export default function Statistics ({ title,stats  }) {
    return (
<section className={style.statistics}>
  {title && <h2 className={style.title}>{title}</h2>}

  <ul className={style.statList}>
    {stats.map(({ id,label,percentage }) =>  
    <li key={id} className={style.item} style={{ backgroundColor: generateColor() }}>
    <span className={style.label}>{label}</span>
    <span className={style.percentage}>{percentage}%</span>
  </li>
  )}
  </ul>
    
</section>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}
