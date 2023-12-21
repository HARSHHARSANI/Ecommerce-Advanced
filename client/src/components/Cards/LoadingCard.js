import { Avatar, Card, Skeleton } from "antd";
import React, { useState } from "react";
const { Meta } = Card;

const LoadingCard = ({ count }) => {
  const [loading, setLoading] = useState(false);

  const cards = () => {
    let totalcards = [];

    for (let i = 0; i < count; i++) {
      totalcards.push(
        <Card className="col-md-4">
          <Skeleton active></Skeleton>
        </Card>
      );
    }

    return totalcards;
  };
  return <div className="row pb-5">{cards()}</div>;
};

export default LoadingCard;
