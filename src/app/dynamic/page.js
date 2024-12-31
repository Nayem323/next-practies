import { getCatFacts } from "@/apis/apis";
// Another option to make page dynamic when there is no api call
// export const dynamic = "force-dynamic";
export default async function Static() {
    const catFact = await getCatFacts("dynamic");

    return (
        <div>
            <h1>Dynamic Page - Pre-rendered at Run time</h1>
            <div className="mt-4">{catFact.fact}</div>
        </div>
    );
}
