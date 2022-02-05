import { NextApiRequest, NextApiResponse } from 'next';

const { FORMSPREE_ENDPOINT } = process.env;

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = JSON.parse(req.body);

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: 'Please Fill all the required fields' });
  }

  try {
    const URL = `https://formspree.io/f/${FORMSPREE_ENDPOINT}`;

    const body = JSON.stringify({ name, email, message });

    const options = {
      body,
      headers: { 'Content-Type': 'application/' },
      method: 'POST',
    };

    const response = await fetch(URL, options);

    if (response.status >= 400) {
      const text = await response.text();

      console.log(response);

      return res.status(400).json({ success: false, message: text });
    }

    return res
      .status(200)
      .json({ success: true, message: 'Your message was sent successfully!' });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Unable to send your message, please try again later.',
    });
  }
};

export default contact;
