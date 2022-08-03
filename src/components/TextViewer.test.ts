import { render } from "@testing-library/svelte";
import TextViewer from './TextViewer.svelte';

const words = ['hey', 'how', 'are', 'you'];

Element.prototype.scrollIntoView = jest.fn();

describe('Keyboard', () => {
    test('renders correctly', () => {
        const { getByText } = render(TextViewer, { words });

        words.forEach(word => expect(getByText(word)).toBeDefined());
    });

    test('renders active words correctly', () => {
        const { getByText } = render(TextViewer, { words });

        expect(getByText(words[0]).classList.contains('active')).toBe(true);
    });

    test('renders neutral words correctly', () => {
        const { getByText } = render(TextViewer, { words });

        expect(getByText(words[1]).classList.contains('active')).toBe(false);
        expect(getByText(words[1]).classList.contains('invalid')).toBe(false);
        expect(getByText(words[1]).classList.contains('valid')).toBe(false);
    });

    test('renders valid words correctly', () => {
        const wordStack = [words[0]];
        const { getByText } = render(TextViewer, { words, wordStack });

        expect(getByText(words[0]).classList.contains('valid')).toBe(true);
    });

    test('renders invalid words correctly', () => {
        const wordStack = ['hesfe'];
        const { getByText } = render(TextViewer, { words, wordStack });

        expect(getByText(words[0]).classList.contains('invalid')).toBe(true);
    });
});