import { withAuth } from "./withAuth";
interface UserProfileProps {
  user: {
    name: string;
    email: string;
  };
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="flex flex-col justify-center">
      <span>name: {user.name}</span>
      <span>email: {user.email}</span>
    </div>
  );
};

export default withAuth(UserProfile);
