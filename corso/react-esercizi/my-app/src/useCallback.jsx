export function useCallback() {

    function handleIncrement() {
        setCounter((c) => c + incrementAmount)
    }
    function handleDecrement() {
        setCounter((c) => c - incrementAmount)
    }
    function handleReset() {
        setCounter(initialValue)
    }
    return handleIncrement, handleDecrement, handleReset
}
