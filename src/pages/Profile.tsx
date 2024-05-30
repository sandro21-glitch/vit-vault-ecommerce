import { useNavigate } from "react-router-dom";
import ProfileLayout from "../features/profile/ProfileLayout";
import { useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import PageLayout from "../ui/PageLayout";

const Profile = () => {
  const { user } = useAppSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <PageLayout title="ჩემი ანგარიში">
      <ProfileLayout />
    </PageLayout>
  );
};

export default Profile;
