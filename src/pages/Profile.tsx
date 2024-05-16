import { useNavigate } from "react-router-dom";
import ProfileLayout from "../features/profile/ProfileLayout";
import { useAppSelector } from "../hooks/hooks";
import SectionHeader from "../ui/SectionHeader";
import { useEffect } from "react";

const Profile = () => {
  const { user } = useAppSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <section>
      <SectionHeader path="ჩემი ანგარიში" />
      <article className="section-center section-x">
        <ProfileLayout />
      </article>
    </section>
  );
};

export default Profile;
