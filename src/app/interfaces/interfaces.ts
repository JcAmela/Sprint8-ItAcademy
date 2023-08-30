

export interface StarShip {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    consumables: string;
    starship_class: string;
    pilots: string[];
    url: string;
}


export interface StarShipsResponse {
    count: number;
    results: StarShip[];
    next: string | null;
}
