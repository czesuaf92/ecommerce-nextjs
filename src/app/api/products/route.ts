import { wooApi } from 'utils/wooCommerceApi';

export async function GET() {
    try {
        const response = await wooApi.get("products");
        if (response.data) {
            return new Response(JSON.stringify(response.data), {
                status: 200,
            });
        }

        throw new Response(`ERROR: ${response.statusMessage}`, {
            status: response.status,
        });
    } catch (error) {
        throw new Response(`ERROR: ${error}`, {
            status: 500,
        });
    }
}
