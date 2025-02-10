import React from "react";
import {IconDiscord} from "../icons/IconDiscord";

export const JoinDiscordButton = (_props) => {
    return (
        <a href="https://discord.gg/mu4R7wSv" target="_blank" rel="noopener noreferrer">
            <div className="btn btn-dark break-all !min-w-44 flex gap-3 items-center justify-center">
                <IconDiscord size={24} fill={'#eeeeee'}/>
                Join Discord
            </div>
        </a>
    )
}