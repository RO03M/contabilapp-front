import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CreateRootElement = (id, className) => {
    const rootElement = document.createElement("div");
    if (id) rootElement.id = id;
    if (className) rootElement.classList.add(className);
    return rootElement;
}

const Portal = props => {
    const {
        id,
        className,
        children
    } = props;

    const [rootElement, SetRootElement] = useState(() => document.getElementById(id));

    useEffect(() => {
        const newRootElement = rootElement || CreateRootElement(id, className);
        
        if (!rootElement) document.body.appendChild(newRootElement);

        SetRootElement(newRootElement);

        return () => newRootElement.remove();
    }, [id, className]);

    if (!rootElement) return null;
    return createPortal(children, rootElement);
}

export default Portal;