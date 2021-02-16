import RecipeModule from "../../../../recipeModule";
import { VerifyEmailThemeResponse, SendVerifyEmailThemeResponse } from "../../../types";
export declare function verifyEmailAPI(recipe: RecipeModule<unknown, unknown, unknown>, token: string): Promise<VerifyEmailThemeResponse>;
export declare function sendVerifyEmailAPI(recipe: RecipeModule<unknown, unknown, unknown>): Promise<SendVerifyEmailThemeResponse>;
export declare function isEmailVerifiedAPI(recipe: RecipeModule<unknown, unknown, unknown>): Promise<boolean>;