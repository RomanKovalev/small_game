import { winners  as winnersURL } from "../settings/settings";

export default class FetchService {
	async getData(url) {
		const res = await fetch(url, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!res.ok) {
			throw new Error(`Could not fetch ${url} received ${res.status}`);
		}
		return await res;
	}

	async sendData(winner) {
	    const data = {
	        date: Date().slice(0,21),
	        winner: winner
	    }
	    const res = await fetch(winnersURL, {
	        method: 'POST',
	        mode: 'cors',
	        cache: 'no-cache',
	        headers: {
	            'Content-Type': 'application/json',
	        },
	        body: JSON.stringify(data),
		});
		if (!res.ok) {
			throw new Error(`Could not fetch ${winnersURL} received ${res.status}`);
		}
	    return await res;
	}
}