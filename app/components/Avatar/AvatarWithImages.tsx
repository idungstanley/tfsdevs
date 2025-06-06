import { useAppSelector } from '@/app/store/store';
import Image from 'next/image';
import React from 'react';
export interface AvatarWithImageProps {
  image_path?: string;
  height?: string;
  width?: string;
  roundedStyle?: string;
  isOnline: boolean;
  handleClick?: () => void;
  showFollowBadge?: boolean;
  isFollowing?: boolean;
  handleFollow?: () => void;
  bgColor?: string;
  textSize?: string;
  textColor?: string;
}

function AvatarWithImage({
  image_path,
  height = 'lg:h-12 h-8',
  width = 'lg:w-12 w-8',
  roundedStyle = 'circular',
  isOnline = false,
  handleClick,
  bgColor = 'bg-[#684DF4]',
  textSize = 'text-[20px]',
  textColor = 'text-white'
}: AvatarWithImageProps) {
  const { selfDetails } = useAppSelector((state) => state.auth);
  const initials = `${selfDetails?.firstName?.[0] ?? ''}${selfDetails?.lastName?.[0] ?? ''}`.toUpperCase();

  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <span className={`${height} ${width} ${roundedStyle} flex items-center justify-center ${bgColor} rounded-full`}>
        {image_path ? (
          <Image
            className={`${height} ${width} ${roundedStyle === 'circular' && 'rounded-full object-cover'} ${
              roundedStyle === 'rounded' && 'rounded'
            }`}
            src={image_path}
            alt="profile-photo"
            height={500}
            width={500}
          />
        ) : (
          <span className="font-bold leading-none" style={{ fontSize: textSize, color: textColor }}>
            {initials}
          </span>
        )}
      </span>
      {isOnline && (
        <div className="rounded-full w-3 h-3 absolute -right-[4px] top-[4px] lg:top-[20%] flex items-center justify-center">
          <span className="lg:w-2 lg:h-2 w-2 h-2 rounded-full bg-brand-green" />
        </div>
      )}
    </div>
  );
}

export default AvatarWithImage;
