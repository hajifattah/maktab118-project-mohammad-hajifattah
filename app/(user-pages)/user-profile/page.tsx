import { UserProfileDetails } from "@/containers/user-profile/userProfileDetails";

const UserProfile: React.FC = () => {
  return (
    <div className="sm:h-[calc(100vh-28rem)] lg:h-[calc(100vh-22.5rem)]">
      <UserProfileDetails />
    </div>
  );
};
export default UserProfile;
