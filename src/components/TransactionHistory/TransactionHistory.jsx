import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
return(
    <div className={style.sectionHistoy}>
      <table className={style.transactionHistory}>
        <thead className={style.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
          {items.map(({ id,type,amount,currency }) =>
          <tr key={id}>
          <td className={style.td}>{type}</td>
          <td className={style.td}>{amount}</td>
          <td className={style.td}>{currency}</td>
        </tr>
          )}
          
        </tbody>
      </table>
    </div>
)
    

};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

