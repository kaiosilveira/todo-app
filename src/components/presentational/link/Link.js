import React from 'react'
import PropTypes from 'prop-types'
import './Link.css'

const Link = ({ text, onClick }) => (
    <a className="link" href="" onClick={e => {
        e.preventDefault()
        onClick()
    }}>
        {text}
    </a>
)

Link.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link