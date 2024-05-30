import Countdown from "../features/productPages/discounted/Countdown";
import DiscountedList from "../features/productPages/discounted/DiscountedList";
import PageLayout from "../ui/PageLayout";

const Discounted = () => {
  return (
    <PageLayout title="ფასდაკლებები">
      <Countdown />
      <DiscountedList />
    </PageLayout>
  );
};

export default Discounted;
