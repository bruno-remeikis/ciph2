import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }: any) => {
	return {
        teste: 'Testado!'
    }
};