import { wooApi } from 'utils/wooCommerceApi';

export async function GET() {
    try {
        const response = await wooApi.get("products");

        if (!response.data && response.status !== 200) {
            return new Response(`Something went wrong: ${response.statusText}`, {
                status: response.status,
            });
        }


        return new Response(JSON.stringify(response.data), {
            status: 200,
        });

    } catch (error) {
        throw new Error(`Something went wrong: ${error}`);
    }
};
