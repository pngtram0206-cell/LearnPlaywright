const { test, expect } = require('@playwright/test');

test('GET user', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    console.log(data);

    expect(data.id).toBe(1);
    expect(data.name).toBe('Leanne Graham');
    expect(data.email).toBeTruthy();

});