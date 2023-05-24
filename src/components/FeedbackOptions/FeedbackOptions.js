import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.container}>
      {options.map(name => {
        return (
          <div key="name" className={s.btn}>
            <button
              onClick={() => onLeaveFeedback(name)}
              type="button"
              name={name}
            >
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
