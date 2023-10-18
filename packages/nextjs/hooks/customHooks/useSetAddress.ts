import { useState } from 'react';

export const useSetAddress = () => {
    const [address, setAddress] = useState('');
    return { address, setAddress };
}