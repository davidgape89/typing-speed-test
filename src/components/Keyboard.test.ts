import { render } from "@testing-library/svelte";
import Keyboard from './Keyboard.svelte';
import { ansiMap } from './ansiMap';

const keys = [].concat(...ansiMap);

describe('Keyboard', () => {
    test('renders correctly', () => {
        const { getByText, getByRole } = render(Keyboard);
        const keyboard = getByRole('none');

        expect(keyboard).toBeDefined();

        keys.forEach(
            (key) => expect(getByText(key.text || key.key)).toBeDefined()
        );
    });

    test('sets keys as active correctly', () => {
        keys.forEach(
            ({text, key}) => {
                const keyMap = {[key]: true};
                const {unmount, getByText} = render(Keyboard, {props: {keyMap}});
                expect(getByText(text || key).classList.contains('active')).toBe(true);
                unmount();
            }
        );
    });
});