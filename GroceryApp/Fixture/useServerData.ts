import { useState, useEffect } from "react";
import { IGroup, IItem, IProgram } from "../interfaces";
import jsonData from "./fixture.json";

export function useServerData() {
  const [response, setResponse] = useState({
    groups: [] as IGroup[],
    items: [] as IItem[],
    programs: [] as IProgram[],
  });

  useEffect(() => {
    // async function fetchData() {
    //   // Pretend this data is coming from a server API request.
    //   setResponse(await import("./fixture.json"));
    //   console.log("I am react developer", response);
    // }

    fetchData();
  }, []);

  async function fetchData() {
    let jsonData1 = JSON.parse(JSON.stringify(jsonData));
    console.log("I am react developer new shenu", jsonData1);
    // Pretend this data is coming from a server API request.
    setResponse(await import("./fixture.json"));
  }

  return response;
}
