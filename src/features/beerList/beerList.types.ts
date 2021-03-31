declare namespace BeerList {
    export interface State {
        items: BeerList.Beer[];
        meta: Common.MetaState;
    }

    export interface Beer {
        id: number;
        name: string;
        tagline: string;
        description: string;
        image_url: string;
    }
}
