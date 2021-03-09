import React from "react";
import PropTypes from "prop-types";
import 'pages/shared/InputField/InputField.scss';

function InputField({label, value, type, name, placeholder, handleMovieChange}) {
    return (
        <div className="input-field">
            <label className="input-field__label">{label}</label>
            <input
                className="input-field__input"
                value={value}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleMovieChange}
            />
        </div>
    )
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleMovieChange: PropTypes.func.isRequired,
};

export default InputField;
