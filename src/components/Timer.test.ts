import { render, screen } from "@testing-library/svelte";
import { tick } from "svelte";
import Timer from './Timer.svelte';

describe("Timer component", () => {
  beforeAll(() => jest.useFakeTimers());

  afterAll(() => {
    jest.runOnlyPendingTimers();
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("renders correctly", () => {
    render(Timer);
    expect(screen.getByText('01:00')).toBeDefined();
  });

  test("is not running by default", async () => {
    render(Timer);
    jest.advanceTimersByTime(2000);
    await tick();
    expect(screen.getByText('01:00')).toBeDefined();
  });

  test("runs correctly", async () => {
    render(Timer, {props: {isRunning: true}});
    jest.advanceTimersByTime(1000);
    await tick();
    expect(screen.getByText('00:59')).toBeDefined();
  });
});