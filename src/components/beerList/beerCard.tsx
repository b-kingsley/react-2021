import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Beer } from "api/getBeers";
import "./beerCard.css";

type Props = {
    beer: Readonly<Beer>;
};

export const BeerCard: React.FC<Props> = ({ beer }) => {
    return (
        <Card className="beerCard">
            <CardActionArea>
                <CardMedia className="beerCard--media" image={beer.image_url} title={beer.name} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {beer.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {beer.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};
