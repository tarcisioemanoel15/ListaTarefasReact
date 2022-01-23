import PropTypes from 'prop-types';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({ handeSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handeSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>

  );
}

// Form.PropTypes = { novaTarefa: 'Valor Padrão',}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handeSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,

};
