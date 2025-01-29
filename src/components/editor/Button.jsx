import React from "react"

export function Button({
    buttonName,
    onClick
}) {
    return (
        <div className="button-container">
            <button onClick={onClick}>{buttonName}</button>
        </div>
    )
}