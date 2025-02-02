import React, { useEffect } from "react";
import Logout from "./Logout";
import SuccessView from "./SuccessView";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useNavigate } from "react-router-dom";
import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { SecondFactorClaim } from "../secondFactorClaim";

export default function Home() {
    const session = useSessionContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!session.loading && session.invalidClaims.find((a) => a.validatorId === SecondFactorClaim.id)) {
            navigate("/second-factor");
        }
    }, [session]);

    async function logoutClicked() {
        await signOut();
        navigate("/auth");
    }

    if (session.loading || session.invalidClaims.length > 0) {
        return null;
    }

    return (
        <div className="fill">
            <Logout logoutClicked={logoutClicked} />
            <SuccessView userId={session.userId} />
        </div>
    );
}
