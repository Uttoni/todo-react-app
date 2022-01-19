import { useState, KeyboardEvent } from "react";

import { Container } from "./styles";

type Props = {
    onEnter: (task: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const [inpuText, setInputText] = useState("");

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === "Enter" && inpuText !== ""){
            onEnter(inpuText);
            setInputText('');
        }
    }

    return(
        <Container>
            <div className="plus-sign">+</div>
            <input 
                type="text"
                placeholder="Add a task"
                value={inpuText}
                onChange={e => { setInputText(e.target.value) }}
                onKeyUp={handleKeyUp}
            />
        </Container>
    );
}