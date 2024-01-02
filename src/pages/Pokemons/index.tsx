import { useGetPokemonQuery } from "@/services/pokemon";
import { Button, List, PaginationProps, Space } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { createElement, useState } from "react";
import { useNavigate } from "react-router-dom";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

const Pokemons = () => {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { data, isFetching } = useGetPokemonQuery({ limit, offset });

  const onDetailClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    navigate(`/pokemon-detail/${e.currentTarget.id}`);
  };

  const onPageChange: PaginationProps["onChange"] = (page: number) => {
    setOffset((page - 1) * limit);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    _current: number,
    size: number
  ) => {
    setLimit(size);
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      loading={isFetching}
      pagination={{
        total: data?.count,
        onChange: onPageChange,
        pageSize: limit,
        onShowSizeChange,
        showSizeChanger: true,
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
            <Button onClick={onDetailClick} title="Detail" id={pokemon.name}>
              Detail
            </Button>
          }
        >
          <List.Item.Meta title={pokemon.name} />
        </List.Item>
      )}
    />
  );
};

export default Pokemons;
