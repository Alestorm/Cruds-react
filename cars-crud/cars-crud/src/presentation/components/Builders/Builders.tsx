import React, { useEffect, useState } from "react";
import "./Builders.css";
import CarService from "../../../application/services/CarService";
import Response from "../../../domain/entities/Response";

interface props {
  changeBuilder: (builder: string) => void;
}

const Builders: React.FC<props> = ({ changeBuilder }) => {
  const [builders, setBuilders] = useState<string[]>([]);

  useEffect(() => {
    CarService.getBuilders().then((res) => {
      const response: Response<string[]> = res.data;
      setBuilders(response.data);
    });
  }, []);
  return (
    <div className="builder-list">
      <button className="builder-link" onClick={() => changeBuilder("")}>
        <span className="builder-text">All</span>
      </button>
      {builders.map((b) => (
        <button
          key={b}
          className="builder-link"
          onClick={() => changeBuilder(b)}
        >
          <span className="builder-text">{b}</span>
        </button>
      ))}
    </div>
  );
};

export default Builders;
