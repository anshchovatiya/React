function Drink({ name }) {
  let part, caffeineContent, age;

  if (name === "tea") {
    part = "leaf";
    caffeineContent = "15-70 mg/cup";
    age = "4000+ years";
  } else {
    part = "bean";
    caffeineContent = "80–185 mg/cup";
    age = "1000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeineContent}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function Task3() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
