import { useState } from '@wordpress/element';
import { Editor } from './Editor';

export default function Field(attributes) {
    const [value, setValue] = useState(attributes.value);

    return (
        <Editor
            name={ attributes.name }
            onChange={ content => setValue(content) }
            value={ value }
        />
    );
}