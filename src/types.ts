export type allDrinksApiFileProps = {
    id: any;
    results: {
        map(arg0: (ba: any) => any): unknown;
        id: number;
        drink_name: string;
        slug: string;
        profile: string;
        base_alcohol: string[];
        ingredients: string[];
        garnish: string[];
        serving_glass: string;
        mixing_direction: string;
        drink_type: string;
        must_know_drink: boolean;
    }

}

export interface Drink {
    localeCompare(b: Drink): number;
    id: number;
    drink_name: string;
    slug: string;
    base_alcohol: string[];
    drink_type: string;
    garnish: string[];
    ingredients: string[];
    serving_glass: string;
    mixing_direction: string;
    profile: string;
    must_know_drink: boolean;

};

export interface SearchResultItem {
    base_alcohol: string[];
    drink_name: string;
};

export interface SearchResultsProps {
    results: any;
    // selectedItem: any;
    // handleClose: Function;
};


export interface ToolTipProps {
    text: string;
    children: any;
}

export interface AlcoholSelectProps {
    alcohol: string | undefined;
}

export interface DrinkRecipeProp {
    drinkName: string[] | string | undefined;
    alcohol: string[] | string | undefined
}