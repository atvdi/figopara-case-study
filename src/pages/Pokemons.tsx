import { useGetPokemonQuery } from "@/services/pokemon";
import { Button, List, PaginationProps, Space } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { createElement } from "react";
import { useNavigate } from "react-router-dom";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

const Pokemons = () => {
  const navigate = useNavigate();
  const limit = 5;
  const offset = 0;
  const { data } = useGetPokemonQuery({ limit, offset });

  const onDetailClick = () => {
    navigate("/pokemon-detail/name");
  };

  const onPageChange: PaginationProps["onChange"] = () => {};

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = () => {};

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        total: 27,
        onChange: onPageChange,
        pageSize: 5,
        onShowSizeChange,
      }}
      dataSource={data?.results}
      renderItem={pokemon => (
        <List.Item
          key={pokemon.name}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
          extra={
            <Button onClick={onDetailClick} title="Detail">
              Detail
            </Button>
          }
        >
          <List.Item.Meta
            title={pokemon.name}
            description={"Pokemon Description"}
          />
        </List.Item>
      )}
    />
  );
};

export default Pokemons;
