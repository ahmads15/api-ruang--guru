import * as endpoints from '../endpoints/getDataEndpoints';
import * as schema from '../schema/getDataSchema';
import 'regenerator-runtime/runtime';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

let response;
describe('Checking Result Search Data on SkillAcademy', () => {
    test.skip('User get data dengan minimal price 300000', async () => {
        response = await endpoints.apiGetDataMinPrice300();
        expect(response.status).toEqual(200);
        expect(response.body.data.data[0].price).toBeGreaterThanOrEqual(300000);
        expect(response.body).toMatchSchema(schema.getDataSchema);
        expect(response.body).toMatchSnapshot();
    });
    test.skip('User get data dengan minimal price 300000 dan maximal price 500000', async () => {
        response = await endpoints.apiGetDataMinPrice300500();
        expect(response.status).toEqual(200);
        expect(response.body.data.data[0].price).toBeLessThanOrEqual(500000);
        expect(response.body.data.data[2].price).toBeLessThanOrEqual(500000);
        expect(response.body.data.data[3].price).toBeLessThanOrEqual(500000);
        expect(response.body.data.data[4].price).toBeLessThanOrEqual(500000);
        expect(response.body.data.data[5].price).toBeLessThanOrEqual(500000);
        expect(response.body.data.data[6].price).toBeLessThanOrEqual(500000);
        expect(response.body.data.data[7].price).toBeLessThanOrEqual(500000);
        expect(response.body.data.data[8].price).toBeLessThanOrEqual(500000);
        expect(response.body).toMatchSchema(schema.getDataSchema);
        expect(response.body).toMatchSnapshot();
    });
    test.skip('User dapat melihat data pada page ke 5 dengan page size 100', async () => {
        response = await endpoints.apiGetDataPagenPageSize();
        expect(response.status).toEqual(200);
        var dataPage = response.body.data.page;
        var dataPageSize = response.body.data.pageSize;
        expect(dataPage).toEqual(5);
        expect(dataPageSize).toEqual(10);
    });
    test('User dapat melihat data by sort price paling tinggi', async () => {
        response = await endpoints.apiGetDataSortPriceDesc();
        expect(response.status).toEqual(200);
        var dataPage = response.body.data.data[0].price;
        expect(dataPage).toEqual(1600000);
    });
});
