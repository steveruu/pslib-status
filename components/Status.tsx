"use client";

import { useState, useEffect } from "react";

const Status = ({ ...props }: { name: string; status: string }) => {
    return (
        <div className="flex justify-between w-[250px] bg-slate-200 py-2 px-4 rounded-xl">
            <h2 className="text-slate-950">{props.name}</h2>
            {/* check if online, loading or offline */}
            <span
                className={
                    props.status === "online"
                        ? "text-green-600"
                        : props.status === "offline"
                        ? "text-red-700"
                        : "text-blue-500"
                }
            >
                {props.status}
                {/* check if online, loading or offline */}
                {props.status === "online"
                    ? " ✔"
                    : props.status === "offline"
                    ? " ❌"
                    : " 🔄"}
            </span>
        </div>
    );
};

export default Status;
