import { TBeer } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export interface BeerProps {
  beers: TBeer[] | null;
}

export function Beers({ beers }: BeerProps) {
  return (
    <>
      {beers ? (
        beers.map((beer) => (
          <Card key={beer.id}>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <img
                src={beer.image_url}
                alt={beer.name}
                className="object-contain h-48 rounded"
              />
            </CardContent>
            <CardFooter className="text-center flex flex-col p-4">
              <CardTitle className="my-2">{beer.name}</CardTitle>
              <CardDescription>{beer.tagline}</CardDescription>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="text-xl font-bold">No beers available !! </div>
      )}
    </>
  );
}