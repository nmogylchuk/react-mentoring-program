import React from "react";
import PropTypes from "prop-types";
import 'pages/shared/InputSelect/InputSelect.scss';

function InputSelect({label, name, genres}) {
    return (
        <div className="input-select">
            <label className="input-select__label">{label}</label>
                <select className="input-select__list" name={name}>
                    {Object.entries(genres).map(([key, genre]) => (
                        <option className="input-select__item" key={key}>{genre}</option>
                    ))}
                </select>
        </div>
    )
}

InputSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
};

export default InputSelect;
