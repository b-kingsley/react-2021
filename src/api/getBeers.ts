export interface Beer {
    id: number;
    name: string;
    tagline: string;
    description: string;
    image_url: string;
}

export default async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data: Beer[] = await response.json();
    console.log("data", data);
    return data;
};
