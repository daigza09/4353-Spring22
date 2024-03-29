class Pricing {
    #current_ppg = 1.50; // Default current price per gallon
    #company_profit = 0.10; // Default company profit per gallon
    #location_factors = {
        '01-TX': 0.02, 
        '02-FL': 0.05, 
        '03-NY': 0.10,
    };

    constructor(gasLocation, fuelType, numGallons) {
        this.gasLocation = gasLocation;
        this.fuelType = fuelType;
        this.numGallons = numGallons;
    }

    calculatePrice() {
        const locationFactor = this.#location_factors[this.gasLocation] || 0.05; 
        const gallonsFactor = this.numGallons > 1000 ? 0.02 : 0.03;

        const margin = this.#current_ppg * (locationFactor + gallonsFactor + this.#company_profit);
        const suggestedPPG = this.#current_ppg + margin;

        return {
            margin,
            suggestedPPG,
            total: suggestedPPG * this.numGallons,
        };
    }
}

module.exports = Pricing;
