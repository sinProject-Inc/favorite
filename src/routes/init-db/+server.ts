import { App } from '$lib/app/app'
import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
	const db = App.db

	try {
		await db.roles.create({ data: { name: 'admin' } })
		await db.roles.create({ data: { name: 'user' } })

		await db.appSettings.create({ data: { key: 'session_lifetime_sec', value: '600' } })
		await db.appSettings.create({ data: { key: 'pin_code_lifetime_sec', value: '300' } })

		return new Response('Success')
	} catch (error) {
		console.error(error)
		return new Response('Error')
	}
}
