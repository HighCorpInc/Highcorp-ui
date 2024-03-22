import { CSSProperties, FC } from 'react';

import { useDraggable } from '@dnd-kit/core';

interface DraggableProps {
    id: string;
    style: CSSProperties;
    children?: React.ReactNode;
}

const Draggable: FC<DraggableProps> = (props: DraggableProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: props.id });

    const style: CSSProperties = {
        cursor: 'grab',
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        position: transform ? 'absolute' : 'relative',
        zIndex: transform ? 999 : 0,
        ...props.style
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    );
}

export default Draggable;
