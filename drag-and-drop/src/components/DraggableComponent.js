import React, {useCallback, useEffect, useMemo, useState} from 'react';

const origin = {
    x:0,
    y:0
};

const DraggableComponent = ({children}) => {
    const [state, setState] = useState({
        isDragging : false,
        origin : origin,
        translation : origin,
    });

    const styles = useMemo(() => ({
        cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
        transform : `translate(${state.translation.x}px, ${state.translation.y}px`,
        transition : state.isDragging ? 'none' : 'transform 500ms',
        zIndex : state.isDragging ? 2 : 1,
        position : state.isDragging ? 'absolute' : 'relative'
    }), [state.isDragging, state.translation]);

    const handleMouseUp = useCallback(() => {
        setState(state => ({
            ...state,
            isDragging :false,
            translation : origin,
        }));
    }, []);

    const handleMouseMove = useCallback(({clientX, clientY}) => {
        const translation = {
            x : clientX - state.origin.x,
            y : clientY - state.origin.y
        };

        setState(state => ({
            ...state,
            translation
        }));
    }, [state.origin]);

    const handleMouseDown = useCallback(({clientX, clientY}) => {
        setState(state => ({
            ...state,
            isDragging : true,
            origin : {
                x : clientX,
                y : clientY
            }
        }));

        console.log(state)
    }, []);

    useEffect(() => {
        if (state.isDragging){
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        setState(state => ({...state, translation : origin}))
    }, []);

    return (
        <div
            style={styles}
            onMouseDown={handleMouseDown}>
            {children}
        </div>
    );
};

export default DraggableComponent;