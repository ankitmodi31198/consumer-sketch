export class AirLineGetModel {
    country: string = null;
    established: string = null;
    head_quaters: string = null;
    id: number = null;
    logo: string = null;
    name: string = null;
    slogan: string = null;
    website: string = null;

    toLocal(response): AirLineGetModel {
        this.country = response.country ? response.country : null;
        this.established = response.established ? response.established : null;
        this.head_quaters = response.head_quaters ? response.head_quaters : null;
        this.id = response.id ? response.id : null;
        this.logo = response.logo ? response.logo : null;
        this.name = response.name ? response.name : null;
        this.slogan = response.slogan ? response.slogan : null;
        this.website = response.website ? response.website : null;

        return this;
    }
}