import { getUser } from "@/apis/apis";
import Button from "../components/button";

export default async function PostUser({ userId }) {
    const userDetails = await getUser(userId);

    return (
        <div className="box-1">
            <Button>{userDetails.name}</Button>
        </div>
    );
}
