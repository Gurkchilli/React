import React from "react";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        imageUrl="http://placekitten.com/300/200"
        name="Mr. Whiskerson"
        phone="(+46) 788104813"
        email="mail1@gmail.com"
      />

      <ContactCard
        imageUrl="http://placekitten.com/400/200"
        name="Fluffy"
        phone="(+46) 818417402"
        email="mail2@gmail.com"
      />

      <ContactCard
        imageUrl="http://placekitten.com/400/300"
        name="Felix"
        phone="(+46) 847104185"
        email="mail3@gmail.com"
      />

      <ContactCard
        imageUrl="http://placekitten.com/200/100"
        name="Rex"
        phone="(+46) 573071954"
        email="mail4@gmail.com"
      />
    </div>
  );
}

export default App;
