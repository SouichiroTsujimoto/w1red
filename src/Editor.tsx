import { VFC, useRef, useState, useEffect } from 'react';

// // default monaco-editor imports
import * as monaco from 'monaco-editor';
import styles from './Editor.module.css';

// // overriding Monaco service with VSCode
// await initialize({
//     ...getConfigurationServiceOverride(),
// });


export const Editor: VFC = () => {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
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
                    language: 'typescript'
                });

			});
		}

		return () => editor?.dispose();
	}, [monacoEl.current]);

	return <div className={styles.Editor} id="editor" ref={monacoEl}></div>;
};


