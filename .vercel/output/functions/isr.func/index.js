export default async (req, res) => {
	res.status(200).end(`isr: ${Date.now()} ${req.method} ${req.url}`);
};
