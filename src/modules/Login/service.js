import { apiService, historyService } from 'services';
import { sessionStore, notificationStore, requestStore } from 'stores';
import { notificationTypes, endpoints } from 'constants';

import store from './store';


function login(username, password) {
	apiService.session
		.auth(username, password)
		.then((body) => {
			store.reset();
			sessionStore.setToken(body.access_token);
			historyService.push('/app');
		})
		.catch(() => {
			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					duration: 3000,
					message: 'Incorrect username or password!'
				}
			});
		})
		.finally(() => requestStore.setRequestInProgress(endpoints.session.auth, false));
}


export {
	// eslint-disable-next-line import/prefer-default-export
	login
}
