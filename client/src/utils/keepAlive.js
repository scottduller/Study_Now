import axios from 'axios';
const cron = require('cron');

(() => {
	const cronJob = cron.CronJob('0 */25 * * * *', () => {
		axios
			.get('/api/todos')
			.then((res) =>
				console.log(`response-ok: ${res.ok}, status: ${res.status}`)
			)
			.catch((err) => console.log(err));
	});
	cronJob.start();
})();
