import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const Button = ({ children, url, style }) => {
    const [isAnimating, setIsAnimating] = useState(false)
    const [position, setPosition] = useState({ top: 5, left: 10 })

    const handleMouseEnter = (event) => {
        setIsAnimating(true)
        const buttonY = event.nativeEvent.offsetY
        const buttonX = event.nativeEvent.offsetX

        setPosition({
            top: buttonY < 24 ? 0 : 48,
            left: buttonX,
        })
    }

    const handleMouseLeave = (event) => {
        setIsAnimating(false)
        const buttonY = event.nativeEvent.offsetY
        const buttonX = event.nativeEvent.offsetX

        setPosition({
            top: buttonY < 24 ? 0 : 48,
            left: buttonX,
        })
    }

    return (
        <>
            <button
                className={`primary-button ${isAnimating ? 'animate' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={style}
            >
                <Link to={url}>{children}</Link>
                <span
                    className='round'
                    style={{
                        top: position.top,
                        left: position.left,
                        width: isAnimating ? '1px' : '',
                        height: isAnimating ? '1px' : '',
                    }}
                />
            </button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
}

export default Button
