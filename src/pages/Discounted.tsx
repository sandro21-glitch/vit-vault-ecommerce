import Countdown from "../features/discounted/Countdown";
import DiscountedList from "../features/discounted/DiscountedList";
import SectionHeader from "../ui/SectionHeader";

const Discounted = () => {
  return (
    <section>
      <SectionHeader path="ფასდაკლებები" />
      <article className="section-center section-x">
        <Countdown />
        <DiscountedList />
      </article>
    </section>
  );
};

export default Discounted;
