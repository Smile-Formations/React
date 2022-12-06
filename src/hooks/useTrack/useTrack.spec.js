import { act, renderHook } from '@testing-library/react-hooks';

import { useTrack } from './useTrack';

jest.mock('../../services/track/track');

describe('useTrack hook', () => {
    it('loads the track', async () => {
        const { result, waitForNextUpdate } = renderHook(
            () => useTrack(1)
        );
        expect(result.current[0].id).toEqual(undefined);
        await waitForNextUpdate();
        expect(result.current[0].id).not.toEqual(undefined);
    });

    it('updates the track', async () => {
        const { result, waitForNextUpdate } = renderHook(
            () => useTrack(1)
        );
        await waitForNextUpdate();
        act(() => result.current[1]({ id: 42 }));
        expect(result.current[0].id).toEqual(42);
    });
});
