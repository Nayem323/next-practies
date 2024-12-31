"use client";

export default function Button({ children }) {
    return (
        <button
            className="mx-0"
            onClick={() => console.log("Button is clicked")}
        >
            {children}
        </button>
    );
}
