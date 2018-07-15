/* eslint-disable no-unused-vars */

const Sequelize = require('sequelize');

class Service {
    constructor(options) {
        this.options = options || {};
    }

    async find(params) {

        const paths = Object.keys(this.app.services);


        const connectionString = this.app.get('postgres');
        const sequelizeOptions = this.app.settings.sequelizeClient.options;
        const sequelize = new Sequelize(connectionString, sequelizeOptions);

        sequelize.query("SELECT * From * ", { type: sequelize.QueryTypes.SELECT})
            .then((tableObj) => {
                console.log('// Tables in database', '==========================');
                console.log(tableObj);
            })
            .catch((err) => {
                console.log('showAllSchemas ERROR', err);
            })

        // console.log(sequelize.modelManager)

        paths.forEach(path => {
            const {Model} = this.app.service(path);

            if (Model) {

                // do something with model here
            }
        });
        return [this.app];
    }

    async get(id, params) {
        return {
            id, text: `A new message with ID: ${id}!`
        };
    }

    async create(data, params) {
        if (Array.isArray(data)) {
            return Promise.all(data.map(current => this.create(current, params)));
        }

        return data;
    }

    async update(id, data, params) {
        return data;
    }

    async patch(id, data, params) {
        return data;
    }

    async remove(id, params) {
        return {id};
    }

    setup(app) {
        this.app = app;
    }
}

module.exports = function (options) {
    return new Service(options);
};

module.exports.Service = Service;
