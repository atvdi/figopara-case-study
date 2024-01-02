import { useGetPokemonByNameQuery } from "@/services/pokemon";
import { Card, Col, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useMatch } from "react-router-dom";
import "./styles.css";

const PokemonDetail = () => {
  const match = useMatch("/pokemon-detail/:name");
  const { data, isFetching } = useGetPokemonByNameQuery(
    match?.params.name ?? ""
  );

  const details = [
    { label: "Name", description: data?.name },
    { label: "Height", description: data?.height },
    { label: "Weight", description: data?.weight },
  ];

  return (
    <Card
      hoverable
      style={{ width: 600 }}
      cover={<Image alt={data?.name} src={data?.sprites.front_default} />}
      loading={isFetching}
    >
      {/* Two different item style for demonstration */}
      {/* <Descriptions>
        {details.map(({ description, label }, index) => (
          <Descriptions.Item key={index} label={label}>
            {description}
          </Descriptions.Item>
        ))}
      </Descriptions> */}
      <Row>
        {details.map(({ description, label }, index, array) => (
          <Col key={index} sm={24 / array.length} className="poke-detail-col">
            <Meta title={label} description={description} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default PokemonDetail;
