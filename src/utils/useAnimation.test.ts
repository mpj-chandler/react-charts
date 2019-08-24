import { getEasingFunction } from "./getEasingFunction";
import { useAnimation } from "./useAnimation";
import { useAnimationTimer } from "./useAnimationTimer";

jest.mock("./useAnimationTimer");
jest.mock("./getEasingFunction");

describe("useAnimation", () => {
    describe("when called with no arguments", () => {
        it("it falls back to its defaults", () => {
            useAnimation();

            expect(useAnimationTimer).toHaveBeenCalledWith(500, 0);
            expect(getEasingFunction).toHaveBeenCalledWith("linear");
        });
    });
});
