import React from "react";
import Image from 'next/image';

const UserAvatar: React.FC<{ imageUrl: string; altText: string }> = ({
  imageUrl,
  altText,
}) => {
  return (
    <Image src={imageUrl} alt={altText} className="rounded-full" />
  );
};

export default UserAvatar;
