import { CSSProperties, FC } from 'react';

import { useDroppable } from '@dnd-kit/core';

interface DroppableProps {
    id: string;
    style: CSSProperties;
    styleOver?: CSSProperties;
    children?: React.ReactNode;
};

const Droppable: FC<DroppableProps> = (props: DroppableProps) => {
    const { isOver, setNodeRef } = useDroppable({ id: props.id });

    const style: CSSProperties = {
        display: 'flex',
        ...props.style,
    };

    return (
        <div ref={setNodeRef} style={!!props.styleOver && isOver ? {...style, ...props.styleOver} : style}>
            {props.children}
        </div>
    );
};

export default Droppable;
