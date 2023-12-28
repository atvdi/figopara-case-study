import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonDetail = () => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt={"charizard"}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        />
      }
    >
      <Meta title="Name" description="charizard" />
      <Meta title="Height" description="17" />
      <Meta title="Weight" description="905" />
    </Card>
  );
};

export default PokemonDetail;
