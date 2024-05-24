import bannerOne from "/baner_1.jpg";
import bannerTwo from "/baner_2.jpg";
import bannerThree from "/baner_3.jpg";
export interface SliderTypes {
  id: number;
  name: string;
  para: string;
  image: string;
  path: string;
}
[];

export const sliderContent: SliderTypes[] = [
  {
    id: 1,
    name: "მცენარეული ექსტრაქტები",
    para: "100% ბუნებრივი წყაროდან მოპოვებული მცენარეული ექსტრაქტები",
    image: bannerOne,
    path: "https://realpharm.eu/en/",
  },
  {
    id: 2,
    name: "Applied Nutrition",
    para: "ბრიტანეთში შექმნილი მაღალი კლასის ბრენდი ექსკლუზიურად ვიტამინის ქსელში.",
    image: bannerTwo,
    path: "https://appliednutrition.uk/",
  },
  {
    id: 3,
    name: "დამზადებულია აშშ-ში",
    para: "ლეგენდარული, ამერიკული ბრენდის- Universal Nutrition-ის ოფიციალური წარმომადგენელი",
    image: bannerThree,
    path: "https://www.animalpak.com/pages/where-to-buy",
  },
];
