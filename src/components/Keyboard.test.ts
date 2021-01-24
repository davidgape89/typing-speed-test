import { render, screen, getByText } from "@testing-library/svelte";
import { tick } from "svelte";
import Keyboard from './Keyboard.svelte';
import { ansiMap } from './ansiMap';

const keys = [].concat(...ansiMap);

describe('Keyboard', () => {
    test('renders correctly', () => {
        render(Keyboard);
        const keyboard = screen.getByRole('none');

        expect(keyboard).toBeDefined();

        keys.forEach(
            (key) => expect(getByText(keyboard, key.text || key.key)).toBeDefined()
        );
    });

    test('sets keys as active correctly', () => {
        keys.forEach(
            ({text, key}) => {
                const keyMap = {[key]: true};
                const {unmount, container} = render(Keyboard, {props: {keyMap}});
                expect(getByText(container, text || key).classList.contains('active')).toBe(true);
                unmount();
            }
        );
    });
});