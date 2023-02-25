import { App } from '$lib/app/app'
import type { RequestHandler } from '@sveltejs/kit'

enum Roles {
	admin = 'admin',
	user = 'user',
}

export const GET: RequestHandler = async () => {
	const db = App.db

	try {
		await db.roles.create({ data: { name: 'admin' } })
		await db.roles.create({ data: { name: 'user' } })

		await db.appSettings.create({ data: { key: 'session_lifetime_sec', value: '600' } })
		await db.appSettings.create({ data: { key: 'pin_code_lifetime_sec', value: '300' } })

		await db.users.create({ data: { email: 'test@test.com', name: 'test_user', role: { connect: { name: Roles.user } } } })

		await db.posts.create({ data: { detail: 'This is a sample post. #sample #post', user: { connect: { id: 0 } } } })

		return new Response('Success')
	} catch (error) {
		console.error(error)
		return new Response('Error')
	}
}
