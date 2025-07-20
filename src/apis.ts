import Papa, { type ParseResult } from "papaparse";

export type Home = {
  Title: string;
  Subtitle: string;
  Image: string;
};

// this is mocking a way of having an external datasource to put our photos and text in the main page.
export const getHome = async (): Promise<Home[]> => {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9AllagKXZyv2MhmOpLLyCgIBR-j9FNW53O4TmflMSgvhA8D9ZSRkYwn_7TsBBT8hRRWZRquZPXMwE/pub?output=csv"
  );
  if (!response.ok) {
    throw new Error("The API is throwing an error");
  }
  const data = await response.text();
  const parsed: ParseResult<Home> = await new Promise((resolve, reject) => {
    Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      complete: resolve,
      error: reject,
    });
  });
  return parsed.data;
};
