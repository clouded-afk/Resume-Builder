import React from "react"

export function Button({
    buttonName,
    onClick,
    className
}) {
    return (
        <div className="button-container">
            <button className={className} onClick={onClick}>{buttonName}</button>
        </div>
    )
}