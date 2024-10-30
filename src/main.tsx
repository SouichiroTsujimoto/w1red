import React from 'react';
import ReactDOM from 'react-dom/client';
import { Editor } from './Editor';
import './useWorker.ts';


ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Editor />
		{/* <div className={styles.Editor} id="editor"></div> */}
	</React.StrictMode>,
);
