import axios from 'axios';

export const useGetComponent = () => {
	const authToken = import.meta.env.VITE_GITHUB_TOKEN;
	const baseUrl = `https://api.github.com/repos/Kacper-Arendt/Copy-Paste/contents/src`;

	const fetchComponentFile = <T>({ componentUrl, onSuccess }: { componentUrl: string; onSuccess: (resp: T) => void }) => {
		axios
			.get<T>(componentUrl, { headers: { Authorization: `Bearer ${authToken}` } })
			.then((resp) => {
				onSuccess(resp.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getComponentFiles = <T>({ componentName, onSuccess }: { componentName: string; onSuccess: (resp: T) => void }) => {
		axios
			.get<T>(`${baseUrl}/packages/core/${componentName}`, { headers: { Authorization: `Bearer ${authToken}` } })
			.then((resp) => {
				onSuccess(resp.data);
				return resp;
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return { fetchComponentFile, getComponentFiles };
};
