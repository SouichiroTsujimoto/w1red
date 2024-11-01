import { useRef, useState, useEffect } from 'react';

import * as monaco from 'monaco-editor';
import styles from './Editor.module.css';


export function Editor() {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	// const [height, setHeight] = useState(170);
	
	const monacoEl = useRef(null);

	useEffect(() => {
		if (monacoEl) {
			setEditor((editor) => {
				if (editor) return editor;

				// return monaco.editor.create(monacoEl.current!, {
				// 	value: ['{', '\t"include": ["vite.config.ts"]', '}'].join('\n'),
				// 	language: 'typescript'
				// });

                // creating an editor with VSCode configuration
                return monaco.editor.create(document.getElementById('editor')!, {
                    value: "Editor with VSCode config and large bold fonts",
                    language: 'typescript',
					// automaticLayout: true,
					theme: "vs-light",
                });

			});
		}

		return () => editor?.dispose();
	}, [monacoEl.current]);

	return (<div className={styles.Editor} id="editor" ref={monacoEl}></div>);
}


