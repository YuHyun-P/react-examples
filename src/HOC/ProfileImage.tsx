import { withAuth } from "./withAuth";

interface ProfileImageProps {
  user: {
    name: string;
    imageSrc: string;
  };
}

const ProfileImage = ({ user: { name, imageSrc } }: ProfileImageProps) => {
  return (
    <div className="flex justify-center">
      <img className="rounded-full" src={imageSrc} alt={name} />
    </div>
  );
};

export default withAuth(ProfileImage);
