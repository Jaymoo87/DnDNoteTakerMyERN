import React from "react";
import { Container, Toast } from "../components";

import { useAuth } from "../utilities/use-auth";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { authenticated } = useAuth();

  const testToast = () => {
    Toast.error("woooo");
  };

  return (
    <Container className="container px-2 mx-auto md:px-0" id="special">
      <h1>Home {authenticated ? "logged in" : "logged out"}</h1>
      <div>
        <button onClick={testToast} className="btn btn-primary">
          Test Button
        </button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reiciendis, labore explicabo laboriosam
          illum aspernatur eveniet enim voluptatem magnam, repellat perspiciatis fugit accusamus dignissimos cum animi
          voluptate ipsum sapiente. Fugit? Autem quas enim, fugiat reprehenderit cumque ullam amet iste dolores alias
          nulla iusto consequatur? Omnis id dolore expedita, ipsa nostrum, aliquid autem quo dolores aut veniam sit
          necessitatibus pariatur. Accusantium! Obcaecati vitae, porro deleniti perferendis, debitis qui laborum
          exercitationem aut rerum officia inventore sunt iure dolorum assumenda distinctio? Excepturi non, error
          blanditiis sit animi corporis? Provident est reprehenderit beatae debitis. Nisi natus, dolore ut laboriosam
          laborum doloremque odit quia similique sapiente atque minus vero minima iusto exercitationem libero? Nemo iste
          repellat fugiat debitis dolorum esse quisquam numquam architecto quibusdam placeat? Placeat fugit perspiciatis
          dolore eaque recusandae beatae possimus saepe aspernatur corrupti nihil voluptatum iste dolores eligendi nulla
          officia, molestias sit temporibus culpa repudiandae omnis explicabo error? Odit ipsa obcaecati illum!
        </p>
      </div>
    </Container>
  );
};

export default Home;
