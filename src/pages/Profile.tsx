import ProfileLayout from "../features/profile/ProfileLayout";
import SectionHeader from "../ui/SectionHeader";

const Profile = () => {
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
