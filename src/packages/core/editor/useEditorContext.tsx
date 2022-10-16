import { createContext, ReactNode, useEffect, useState } from 'react';

// HOOKS
import { useGetComponent } from 'src/packages/core/editor/useGetComponent';

// MODELS
import { EditorPropsInterface } from 'src/packages/core/editor/types';

interface ComponentInterface {
	name: string;
	type: 'file';
	size: number;
	url: string;
	content: string;
}

export const useEditorContext = ({ componentName, componentTitle }: EditorPropsInterface) => {
	const [componentDir, setComponentDir] = useState<ComponentInterface[] | null>(null);
	const [activeFile, setActiveFile] = useState<ComponentInterface>();
	const { getComponentFiles, fetchComponentFile } = useGetComponent();

	useEffect(() => {
		const onSuccess = (data: ComponentInterface[]) => {
			setComponentDir(data);
		};

		getComponentFiles({ componentName, onSuccess });
	}, []);

	const getCurrentFile = (componentUrl: string) => {
		const onSuccess = (data: ComponentInterface) => {
			const updatedDate = { ...data, content: atob(data.content) };

			setActiveFile(updatedDate);
		};

		fetchComponentFile({ componentUrl, onSuccess });
	};

	return {
		componentDir,
		componentName,
		componentTitle,
		getCurrentFile,
		activeFile,
	};
};

export const ContextData = createContext({} as ReturnType<typeof useEditorContext>);

export const ContextProvider = ({ children, value }: { children: ReactNode; value: EditorPropsInterface }) => (
	<ContextData.Provider value={useEditorContext(value)}>{children}</ContextData.Provider>
);
