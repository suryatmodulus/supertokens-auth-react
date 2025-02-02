import { BooleanClaim } from "supertokens-web-js/recipe/session";

export const SecondFactorClaim = new BooleanClaim({
    id: "2fa-completed",
    refresh: async () => {
        // This is something we have no way of refreshing, so this is a no-op
    },
});
