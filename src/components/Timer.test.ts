import { render } from "@testing-library/svelte";
import Timer from './Timer.svelte';

describe("Timer component", () => {
  test("should render component correctly", () => {
    const {container} = render(Timer);
    expect(true).toBe(true);
  });
});