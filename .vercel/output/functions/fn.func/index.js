export default async (req, res) => {
	const url = req.headers['x-now-route-matches'];

	res.writeHead(200);
	res.end(`isr: ${new Date().toISOString()} ${req.method} ${req.url} ${url}`);
};
