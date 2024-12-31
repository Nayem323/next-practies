import { getCatFacts } from "@/apis/apis";
import CatFacts from "../components/cat-facts";
import { Suspense } from "react";

export default async function Static() {
    const catFact = await getCatFacts();

    return (
        <div>
            <h1>Dynamic Page - Pre-rendered at Run time</h1>
            <p>One dynamic component will make the whole page dynamic</p>
            <div className="mt-4">{catFact.fact}</div>
            <div className="mt-6">
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <CatFacts />
                </Suspense>
            </div>
        </div>
    );
}
