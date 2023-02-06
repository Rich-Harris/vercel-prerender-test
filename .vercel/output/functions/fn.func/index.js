export default async (req, res) => {
	res.writeHead(200);
	res.end(`isr: ${new Date().toISOString()} ${req.method} ${req.url}`);
};
