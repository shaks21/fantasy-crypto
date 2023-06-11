import React from "react";

const UserAvatar: React.FC<{ imageUrl: string; altText: string }> = ({
  imageUrl,
  altText,
}) => {
  return <img src={imageUrl} alt={altText} className="rounded-full" />;
};

export default UserAvatar;
