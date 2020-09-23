import React from 'react'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    // className tässä css:ää / tyylitiedostoa varten
    return (
        <div className="error">
            {message}
        </div>
    )
}
export default Notification;