import api from '../services/Api.js'

export class ConversorXmlService {

    constructor() {

    }

    sendFileHandler = async (state, event) => {
		event.preventDefault();

		const listCheckedParams = [];

		let formData = new FormData();

		Array.from(state.files).forEach((file) => {
			formData.append('files', file);
		});

		state.infos.forEach(info => {
			if (info.isChecked) {
				listCheckedParams.push(info.value);
			}
		});

		formData.append('mappedParams', new Blob([JSON.stringify({listParams: listCheckedParams})], {type: "application/json"}));

		const response = await api.post("/xmlparser/upload", formData, {
			params: {
				type: 'default'
			}
		});

		const link = document.createElement('a');
		link.href = response.data.fileDownloadUri;
		link.setAttribute('download', response.data.fileName);
		document.body.appendChild(link);
		link.click();

	}
}

export default ConversorXmlService;