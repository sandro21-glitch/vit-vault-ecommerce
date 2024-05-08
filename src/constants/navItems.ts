import homeIcon from "/icons/home-svgrepo-com.svg";
import deliveryIcon from "/icons/box-delivery-package-2-svgrepo-com.svg";
import blogIcon from "/icons/blog-svgrepo-com.svg";
import peopleIcon from "/icons/people-svgrepo-com.svg";
import contactIcon from "/icons/contact-pin-location-svgrepo-com.svg";
export const navItems = [
  {
    id: 1,
    name: "მთავარი",
    icon: homeIcon,
    color: "#5CB85C",
    path: "/",
  },
  {
    id: 2,
    name: "მიტანის სერვისი",
    icon: deliveryIcon,
    color: null,
    path: "/",
  },
  {
    id: 3,
    name: "ბლოგი",
    icon: blogIcon,
    color: null,
    path: "/blog",
  },
  {
    id: 4,
    name: "ჩვენს შესახებ",
    icon: peopleIcon,
    color: null,
    path: "/",
  },
  {
    id: 5,
    name: "კონტაქტი",
    icon: contactIcon,
    color: null,
    path: "/",
  },
];
