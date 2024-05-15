import RegisterForm from "../features/User/RegisterForm";
import SectionHeader from "../ui/SectionHeader";

const Register = () => {
  return (
    <section>
      <SectionHeader path="რეგისტრაცია" />
      <article className="section-center section-x min-h-[65vh]">
        <RegisterForm />
      </article>
    </section>
  );
};

export default Register;
