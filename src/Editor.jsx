import { useRef, useEffect } from '@wordpress/element';
import { basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { indentWithTab } from '@codemirror/commands';
import { EditorView, keymap } from '@codemirror/view';
import { html } from '@codemirror/lang-html';
import { coolGlow } from 'thememirror';

export function Editor({ name, value, onChange }) {
    const rootRef = useRef(null);
    const textareaRef = useRef(null);
    const editorRef = useRef(null);

    useEffect(() => {
        if(textareaRef.current === null) {
            return;
        }

        const element = textareaRef.current;
        const extensions = [
            basicSetup,
            keymap.of([indentWithTab]),
            html(),
            coolGlow,
            EditorView.updateListener.of((update) => {
                if(update.docChanged) {
                    onChange(update.state.doc.toString() || '');
                }
            })
        ];

        const startState = EditorState.create({
            doc: element.value,
            extensions
        });
        
        const view = new EditorView({
            state: startState,
            parent: element.parentNode
        });

        element?.parentNode?.insertBefore(view.dom, element);
        element.style.display = 'none'; 

        editorRef.current = {
            startState,
            view
        };

        if(element.form) {
            element.form.addEventListener('submit', () => {
                element.value = view.state.doc.toString();  
                onChange(view.state.doc.toString());
            });
        }
    }, []);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            const element = editorRef.current.view.dom;

            if(element && rootRef.current) {
                rootRef.current.style.setProperty('--editor-max-width', rootRef.current.getBoundingClientRect().width + 'px');
            }
        }, 500);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className='html-editor' ref={ rootRef }>
            <textarea 
                value={ value || '' } 
                name={ name } 
                ref={ textareaRef }
            >    
            </textarea>
        </div>
    );
}