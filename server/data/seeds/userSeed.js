const { MockGenerator, DataSource } = require('@superseed/core');
const chance = require('chance').Chance();

class UserDataSource extends DataSource {
    constructor(model) {
        super();
        this.model = model;
    }

    async createSeeds(seeds) {
        return await this.model.insertMany(seeds);
    }

    async deleteSeeds(seeds) {
        const ids = seeds.map(seed => seed._id);
        return await this.model.deleteMany({ _id: { $in: ids } });
    }
}

const userGenerator = new MockGenerator({
    generateMock() {
        return {
            name: chance.name(),
        };
    }
});

module.exports = { UserDataSource, userGenerator };
