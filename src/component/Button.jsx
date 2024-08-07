import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
const Button = ({ children, url, style, setOpenVideo }) => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(url)
        setOpenVideo(true)
    }
    return (
        <>
            <button
                className={`primary-button  'animate'}`}
                style={style}
                onClick={clickHandler}
            >
                {children}
            </button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    setOpenVideo: PropTypes.string.isRequired,
}

export default Button
