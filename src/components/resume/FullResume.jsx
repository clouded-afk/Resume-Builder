import React from "react";
import { Header } from "./Header";

export function FullResume({
    fullName,
    contactInformation
}) {
    return(
        <Header 
            fullName={fullName}
            contactInformation={contactInformation}
        />
    )
}