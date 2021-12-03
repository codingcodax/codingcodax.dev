import { useState } from 'react';

const SocialLink = () => {
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => setIsHover((v) => !v);

  return (
    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <p>{isHover}</p>
    </div>
  );
};

export default SocialLink;
