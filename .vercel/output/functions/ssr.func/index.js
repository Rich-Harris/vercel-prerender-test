export default async (req, res) => {
	res.status(200).end(`ssr: ${Date.now()} ${req.method} ${req.url}`);
};
