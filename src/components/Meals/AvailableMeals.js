import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "Finest Rice and 3 Chicken Pieces",
    price: 182.99,
  },
  {
    id: "m2",
    name: "Maha-Burger",
    description: "A special double-decker burger with chicken",
    price: 166.50,
  },
  {
    id: "m3",
    name: "Bahubali Roll",
    description: "The biggest double egg chicken roll",
    price: 148.99,
  },
  {
    id: "m4",
    name: "Icecream",
    description: "Tastiest scoops of 3 different flavoured icecream",
    price: 180.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li>
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    </li>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.list}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
