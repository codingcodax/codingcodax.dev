import { NextApiRequest, NextApiResponse } from 'next';

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      contentType: 'application/json',
    },
    body: JSON.stringify({ email }),
  };

  const result = await fetch(
    'https://www.getrevue.co/api/v2/subscribers',
    options
  );

  const data = await result.json();

  if (!result.ok) return res.status(400).json({ error: data.error.mail[0] });

  return res.status(200).json({ error: '' });
};

export default subscribe;
