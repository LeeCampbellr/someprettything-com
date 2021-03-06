import { useEffect } from 'react';

export default function useSavedPosition() {

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('unload', holdPostion);
            setPosition();

            return () => {
                window.removeEventListener('unload', holdPostion);
            }
        }
    }, []);
}

function key() {
    return 'scroll_position|' + window.location.pathname;
}

function holdPostion() {
    window.sessionStorage.setItem(key(), JSON.stringify([ window.scrollX, window.scrollY ]));
}

function setPosition() {
    try {
        const position = JSON.parse(window.sessionStorage.getItem(key()));
        console.log(position)
        if (position && Array.isArray(position)) {
            console.log('scrolling to: ' + JSON.stringify(position));
            window.scrollTo(position[0], position[1]);
        }
    } catch (e) {
        console.log('no currentPosition yet: ' + e)
    }
}
