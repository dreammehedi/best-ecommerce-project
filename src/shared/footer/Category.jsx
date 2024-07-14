import { Link } from "react-router-dom";
const categoryMenuData = [
  {
    name: "Dairy & Bakery",
    path: "#",
  },
  {
    name: "Fruits & Vegetable",
    path: "#",
  },
  {
    name: "Snack & Spice",
    path: "#",
  },
  {
    name: "Juice & Drinks",
    path: "#",
  },
  {
    name: "Chicken & Meat",
    path: "#",
  },
  {
    name: "Fast Food",
    path: "#",
  },
];
function Category() {
  return (
    <>
      <div>
        <h3 className="mb-4 font-bold text-black text-[18px]">Category</h3>

        <ul className="flex flex-col space-y-3 text-sm text-gray-77">
          {categoryMenuData?.map((menu, ind) => {
            return (
              <li key={ind}>
                <Link
                  className="my-transition hover:!text-orange-f5 hover:pl-2 capitalize"
                  to={menu.path}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Category;
