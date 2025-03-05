import { useState } from 'react';

export default function useFontSize() {
    const [fontSize, setFontSize] = useState(16);

    const largerFont = () => setFontSize(20);
    const defaultFont = () => setFontSize(16);

    return { fontSize, largerFont, defaultFont };
}