"use client";

import { useState, useEffect } from "react";
import ping from "@/lib/fetch";

const Status = ({ ...props }: { url: string; name: string }) => {
    const [status, setStatus] = useState("loading...");

    useEffect(() => {
        ping(props.url).then((res) => {
            if (res) {
                setStatus("online");
            } else {
                setStatus("offline");
            }
            console.log(res);
        });
    }, [props.url]);

    return (
        <div className="flex justify-between w-[250px] bg-slate-200 py-2 px-4 rounded-xl">
            <h2 className="text-slate-950">{props.name}</h2>
            {/* check if online, loading or offline */}
            <span
                className={
                    status === "online"
                        ? "text-green-600"
                        : status === "offline"
                        ? "text-red-700"
                        : "text-blue-500"
                }
            >
                {status}
                {/* check if online, loading or offline */}
                {status === "online"
                    ? " ✔"
                    : status === "offline"
                    ? " ❌"
                    : " 🔄"}
            </span>
        </div>
    );
};

export default Status;
