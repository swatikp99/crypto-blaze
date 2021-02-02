import PropTypes from 'prop-types'

const Button = ({ text ,color, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>
}

export default Button

Button.defaultProps = {
    color: 'blue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}